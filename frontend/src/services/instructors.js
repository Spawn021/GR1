import { fetchApi } from './index';

export const fetchInstructors = async (name) => {
   return (await fetchApi(`/instructors?name=${name}`)).instructors;
};

export const fetchInstructorMembers = async () => {
   return (await fetchApi(`/instructors/member`)).instructors;
};

export const fetchInstructor = async (id) => {
   return await fetchApi(`/instructors/${id}`);
};
