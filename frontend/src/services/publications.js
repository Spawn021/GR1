import { fetchApi } from './index';
export const fetchPublications = async (name) => {
   return await fetchApi(`/publications`);
};
