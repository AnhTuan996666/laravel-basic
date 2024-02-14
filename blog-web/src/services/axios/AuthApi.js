import * as httpRequest from '@/plugins/axios.js';

export const login = async () => {
  try {
    return await httpRequest.post('login');
  } catch (error) {
    console.log('error: ', error);
  }
};