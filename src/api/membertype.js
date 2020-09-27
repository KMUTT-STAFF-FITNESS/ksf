import { appAxios } from "../libs/axios";

export const apiFetchMemberType = () => {
  return appAxios().get(`${process.env.REACT_APP_BACKEND}/membertype`);
};
