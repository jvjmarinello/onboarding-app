import axios from 'axios';

export const getUser = async (email: string, password: string) => {
  const response = await axios.get('/api/users/', {params: { email, password }});
  return response.data.user;
};

export const getUsers = async () => {
  const response = await axios.get('/api/users/all');
  return response.data.users;
};

export const registerUser = async (email: string, password: string) => {
  const response = await axios.post('/api/users/register', { email, password });
  return response.data.user;
};

export const updateUser = async (id: string, formData: Record<string, unknown>) => {
  const response = await axios.put(`/api/users/update/${id}`, formData);
  return response.data.user;
};