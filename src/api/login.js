import { appAxios } from "../libs/axios";

export const apiFecthLogin = (data) => {
  return appAxios().post(`${process.env.REACT_APP_BACKEND}/login`, data);
};
