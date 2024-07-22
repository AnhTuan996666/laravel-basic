import { AuthRepository } from "@/repositories/auth_repository";

const repositories = {
  auth: AuthRepository,
};

export default class RepositoryFactory {
  static create(key) {
    return new repositories[key]();
  }
}
