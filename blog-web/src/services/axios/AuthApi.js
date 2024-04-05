import * as httpRequest from '@/plugins/axios.js';

export const login = async (pram) => {
  try {
    return await httpRequest.post('login', pram);
  } catch (error) {
    console.log('error: ', error);
  }
};