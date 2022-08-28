import {HTTP, TOptions} from '../core/http';
import { BASE_URL_API } from "./constants";
import { TSignUp } from "./auth";

const httpInstance = new HTTP;

type TEditPassword = {
  data : {
    "oldPassword": "string",
    "newPassword": "string",
  },
  headers: {
    [index: string]: string
  }
}

const UsersAPI = {
  editProfile: async (data: TSignUp) => {
    try {
      const res = await httpInstance.put(`${BASE_URL_API}/api/v2/user/profile`, data)
      return {
        status: res.status,
        response: typeof res.response === 'object' ? JSON.parse(res.response) : res.response
      }
    } catch (error) {
      return error;
    }
  },

  editPassword: async (data: TEditPassword) => {
    try {
      const res = await httpInstance.put(`${BASE_URL_API}/api/v2/user/password`, data)
      return {
        status: res.status,
        response: typeof res.response === 'object' ? JSON.parse(res.response) : res.response
      }
    } catch (error) {
      return error;
    }
  },

  changeAvatar: async (data: TOptions) => {
    try {
      const res = await httpInstance.put(`${BASE_URL_API}/api/v2/user/profile/avatar`, data)
      return {
        status: res.status,
        response: typeof res.response === 'object' ? JSON.parse(res.response) : res.response
      }
    } catch (error) {
      return error;
    }
  },
}

export default UsersAPI;