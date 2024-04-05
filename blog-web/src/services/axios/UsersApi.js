import * as httpRequest from '@/plugins/axios.js';

export const listUser = async () => {
  try {
    return await httpRequest.get('users');
  } catch (error) {
    console.log('error: ', error);
  }
};

export const changeStatus = async (id, newStatus) => {
  try {
    return await httpRequest.post(`change/status/${id}`, { status: newStatus });
  } catch (error) {
    console.log('error: ', error);
  }
};

export const listDepartments = async () => {
  try {
    return await httpRequest.get('department/list');
  } catch (error) {
    console.log('error: ', error);
  }
};