import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { Notify } from '@/classes/notify';
import { useDepartmentStore } from '@/stores/department';
import router from '@/router';
import { DepartmentItemInterface } from '@/types/department';
import { Loading } from '@/classes/loading';
import { PATHS } from '@/constants/path';

export const useDepartmentComposable = () => {
  const departmentIdToDelete = ref<number | null>(null);
  const isShowModalDeleteDirectory = ref<boolean>(false);
  const {
    getList,
    departments,
    createDepartment,
    deleteDepartment,
    updateDepartment,
    getDepartment,
    department,
    searchQuery,
    isEdit,
    formErrors,
  } = useDepartmentStore();
  const { t } = useI18n();

  const departmentHeaderTable = computed(
    () =>
      <string[]>[
        t('department.name'),
        t('department.description'),
        t('department.code'),
        t('common.status'),
        t('common.type'),
        t('department.upper_department'),
        t('department.action'),
      ],
  );

  const createOptions = (enumObject: Record<string, string | number | boolean>) => {
    return Object.keys(enumObject)
      .filter((key: string) => isNaN(Number(key)))
      .map((key: string) => {
        return {
          text: t(`common.${key.toLowerCase()}`),
          value: enumObject[key as keyof typeof enumObject],
        };
      });
  };

  const getListDepartments = async (params = {}) => {
    Loading.start();
    await getList(params);
    Loading.stop();
  };

  const handleDelete = (id: number): void => {
    deleteDepartment(
      id,
      () => {
        getListDepartments({});
        Notify.success(t('common.success'));
      },
      () => {
        Notify.error(t('common.error'));
      },
    );
  };

  const openDeleteModal = (id: number) => {
    departmentIdToDelete.value = id;
    isShowModalDeleteDirectory.value = true;
  };

  const handleCloseModalDeleteDirectory = () => {
    isShowModalDeleteDirectory.value = false;
    departmentIdToDelete.value = null;
  };

  const confirmDelete = () => {
    if (departmentIdToDelete.value !== null) {
      handleDelete(departmentIdToDelete.value);
      handleCloseModalDeleteDirectory();
    }
  };

  const handleCreate = (): void => {
    createDepartment(
      () => {
        Notify.success(t('common.success'));
      },
      () => {
        Notify.error(t('common.error'));
      },
    );
  };

  const handleUpdate = (id: number): void => {
    updateDepartment(
      id,
      () => {
        Notify.success(t('common.success'));
      },
      () => {
        Notify.error(t('common.error'));
      },
    );
  };

  const handleClearData = () => {
    department.value = {
      code: '',
      name: '',
      description: '',
      parent_id: null,
      type: null,
    };
  };

  const handleBackDepartment = () => {
    handleClearData();
    return router.push({ path: PATHS.DEPARTMENT.LIST });
  };

  const handleOpenFormSaveData = (id = null) => {
    const endpoint = id ? id : 'create';
    if (endpoint === 'create') {
      isEdit.value = false;
      handleClearData();
      return router.push({ path: PATHS.DEPARTMENT.CREATE });
    } else {
      isEdit.value = true;
      return router.push({ path: `${PATHS.DEPARTMENT.LIST}${endpoint}` });
    }
  };

  const listDepts = computed(() => {
    return departments.value.map(dept => {
      return {
        value: dept.id,
        text: dept.name,
      };
    });
  });

  const fetchItem = async (id: number) => {
    await getDepartment(
      id,
      res => {
        const response = res.data as DepartmentItemInterface;
        department.value = response;
      },
      () => {},
    );
  };

  const totalPages = computed(() => departments.total);

  return {
    departments,
    searchQuery,
    handleCreate,
    handleDelete,
    openDeleteModal,
    handleCloseModalDeleteDirectory,
    confirmDelete,
    isShowModalDeleteDirectory,
    departmentIdToDelete,
    handleUpdate,
    isEdit,
    getDepartment,
    listDepts,
    getList,
    department,
    fetchItem,
    createOptions,
    getListDepartments,
    handleOpenFormSaveData,
    totalPages,
    formErrors,
    handleClearData,
    handleBackDepartment,
    departmentHeaderTable,
  };
};
