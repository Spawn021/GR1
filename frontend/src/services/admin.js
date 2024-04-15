import { fetchApi } from './index';
export const fetchLogin = async (username, password) => {
   return await fetchApi('/admin/login', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         username: username,
         password: password,
      }),
   });
};
