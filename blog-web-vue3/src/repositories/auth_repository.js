import { BaseRepository } from "@/repositories/base_repository";
import ENDPOINT from "@/constants/api_endpoint";

export class AuthRepository extends BaseRepository {
  async login(params, success, error) {
    return await this.call(ENDPOINT.AUTH.LOGIN, params, "post", success, error);
  }

  async logout(params, success, error) {
    return await this.call(
      ENDPOINT.AUTH.LOGOUT,
      params,
      "post",
      success,
      error
    );
  }
}
