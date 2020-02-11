import { post, get } from './request';

export const signUpUser = (email, password) => post('/auth/signup', { email, password });
export const loginUser = (email, password) => post('/auth/login', { email, password });
export const verifyAuth = () => get('/auth/verify');
