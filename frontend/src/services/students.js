import { fetchApi } from './index';
export const fetchStudents = async () => {
   return await fetchApi(`/students`);
};
export const getStudent = async (id) => {
   return await fetchApi(`/students/${id}`);
};
