import type { UserInfo, UserList } from '@/types/store';
import { defineStore } from 'pinia';
import { userLogin } from '@/api/user';
interface UserState {
  userInfo: Nullable<UserInfo>;
  userList: Array<UserList>;
  token?: string;
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    userInfo: null,
    userList: [],
    token: undefined,
  }),
  actions: {
    setToken(info: string | undefined) {
      this.token = info ? info : ''; // for null or undefined value
    },
    setUserList(userList: Array<UserList>) {
      this.userList = userList;
    },
    setUser(info: UserInfo) {
      console.log();
      this.userInfo = info;
    },
    async login(params: { account: string; password: string }) {
      try {
        const res = await userLogin(params);
        const { accessToken, secretKey } = res.data;
        this.setToken(accessToken);
        return res.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    // async register(params: { account: string; password: string }): Promise<any> {
    //   try {
    //     const data = await userLogin(params);
    //     this.setUser()
    //   }
    //},
  },
});
