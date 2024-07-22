import { BaseRepository } from "@/repositories/base_repository";
import ENDPOINT from "@/constants/api_endpoint";

export class DepartmentRepository extends BaseRepository {
  async index(params, success, error) {
    return await this.call(
      ENDPOINT.DEPARTMENT.LIST,
      params,
      "get",
      success,
      error
    );
  }

  async show(id, success, error) {
    return await this.call(
      ENDPOINT.DEPARTMENT.LIST_ITEM(id),
      {},
      "get",
      success,
      error
    );
  }

  async update(id, params, success, error) {
    return await this.call(
      ENDPOINT.DEPARTMENT.UPDATE(id),
      params,
      "put",
      success,
      error
    );
  }

  async create(params, success, error) {
    return await this.call(
      ENDPOINT.DEPARTMENT.CREATE,
      params,
      "post",
      success,
      error
    );
  }

  async delete(id, success, error) {
    return await this.call(
      ENDPOINT.DEPARTMENT.DELETE(id),
      {},
      "delete",
      success,
      error
    );
  }
}
