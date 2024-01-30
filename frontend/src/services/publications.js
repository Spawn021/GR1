import { fetchApi } from './index';
const fetchPublications = async (name) => {
   return await fetchApi(`/api/publications`);
};
export default fetchPublication;
