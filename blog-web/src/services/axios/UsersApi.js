import * as httpRequest from '@/plugins/axios.js';

export const listUser = async (params = {}) => {
  try {
    return await httpRequest.get('users', params);
  } catch (error) {
    console.log('error: ', error);
  }
};

export const listDepartments = async (params = {}) => {
  try {
    return await httpRequest.get('department/list', params);
  } catch (error) {
    console.log('error: ', error);
  }
};