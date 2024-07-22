import { ValidationErrorMessageInterface } from '@/types/api.ts';
import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { DepartmentItemInterface, DepartmentSearchInterface } from '@/types/department';
import RepositoryFactory from '@/repositories';
import { ErrorResponseInterface, SuccessDataInterface } from '@/types/api';
import { DepartmentRepository } from '@/repositories/department_repository';
import router from '@/router';
import { PATHS } from '@/constants/path';
import { PaginateInformation } from '@/constants/paginate';

export const useDepartmentStore = defineStore('department', () => {
  const departments = reactive<{ value: DepartmentItemInterface[]; total: number }>({ value: [], total: 0 });
  const department = reactive<{ value: DepartmentItemInterface }>({ value: {} });

  const searchQuery = reactive<DepartmentSearchInterface>({ items: PaginateInformation.ITEMS, keyword: ''});
  const isEdit = reactive<{ value: boolean }>({ value: false });
  const departmentFactory = RepositoryFactory.create('department') as DepartmentRepository;
  const formErrors = reactive<{ value: ValidationErrorMessageInterface[] }>({ value: [] });

  const getList = async (params: { page?: number}) => {
    searchQuery.page = params.page || 1;
    await departmentFactory.index(
      searchQuery,
      (res: SuccessDataInterface) => {
        const response = res.data as DepartmentItemInterface[];
        departments.value = response;
        departments.total = res.otherData.total;
      },
      () => {},
    );
  };

  const getDepartment = async (
    id: number,
    success: (res: object) => void,
    error: (err: ErrorResponseInterface) => void,
  ) => {
    await departmentFactory.show(
      id,
      (res: SuccessDataInterface) => {
        const response = res.data as DepartmentItemInterface;
        department.value = response;
        return success({
          message: res.message,
          data: response,
        });
      },
      (err: ErrorResponseInterface) => error(err),
    );
  };

  const createDepartment = async (success: (res: object) => void, error: (err: ErrorResponseInterface) => void) => {
    await departmentFactory.create(
      department.value,
      (res: SuccessDataInterface) => {
        router.push({ path: PATHS.DEPARTMENT.LIST });
        return success({
          message: res.message,
        });
      },
      (err: ErrorResponseInterface) => {
        formErrors.value = err.errors as ValidationErrorMessageInterface[];
        error(err);
      },
    );
  };

  const updateDepartment = async (
    id: number,
    success: (res: object) => void,
    error: (err: ErrorResponseInterface) => void,
  ) => {
    await departmentFactory.update(
      id,
      department.value,
      (res: SuccessDataInterface) => {
        return success({
          message: res.message,
        });
      },
      (err: ErrorResponseInterface) => error(err),
    );
  };

  const deleteDepartment = async (
    id: number,
    success: (res: object) => void,
    error: (err: ErrorResponseInterface) => void,
  ) => {
    await departmentFactory.delete(
      id,
      (res: SuccessDataInterface) => {
        return success({
          message: res.message,
        });
      },
      (err: ErrorResponseInterface) => error(err),
    );
  };

  return {
    departments,
    getList,
    createDepartment,
    updateDepartment,
    deleteDepartment,
    getDepartment,
    department,
    searchQuery,
    isEdit,
    formErrors,
  };
});
