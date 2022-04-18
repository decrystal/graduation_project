/**
 * 用户列表
 */
import axiosRequest from '../utils/axiosRequest';
import axios from 'axios';
import { LoginResultModel } from './model/userModel';
export const getUserList = (params: {
  blurry?: String;
  page_no?: Number;
  page_size?: Number;
}) => {
  console.log('test-mounted');
  return axios.get('/api/sys/role/list', { params });
};
/**
 * 创建用户
 */
export const createUser = (params: {
  account: string;
  password: string;
  tenantld: string;
  organizationId?: string;
  roleId: string;
  userType: number;
}) => {
  return axios.post('sys/user/create_user', { params });
};
/**
 *
 * @param params 用户权限升级
 * @returns
 */
export const updateUser = (params: { id: string; roleId: string }) => {
  return axios.post('sys/user/update_user', { params });
};

/**
 *
 * @param params 用户登录
 */
export const userLogin = (params: {
  account: string;
  password: string;
}): Promise<{ data: LoginResultModel }> => {
  return axios.post('/api/sys/user/login', { params });
};
/**
 * 用户登录出去
 */
export const userLogout = () => {
  return axios.post('sys/user/logout');
};
