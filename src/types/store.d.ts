import { Nullable } from 'element-plus/lib/components/cascader-panel/src/node';

export interface UserInfo {
  account: Nullable<string>;
  password: Nullable<string>;
  tenantId: Nullable<string>;
  organizationId: Nullable<string>;
  roleId: Nullable<string>;
  userType: Nullable<number>;
}

export interface UserList {
  id: Nullable<string>;
  name: Nullable<string>;
  description: Nullable<string>;
  userType: Nullable<number>;
  tenantId: Nullable<number>;
  tenantName: Nullable<string>;
  organizationIs: number;
  organizationName: string;
  createTime: string;
  updateTime: string;
  updateBy: string;
}
