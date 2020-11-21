import { appAxios } from "../libs/axios";

export const apiUploadSlip = (id, file) => {
  return appAxios().post(`${process.env.REACT_APP_BACKEND}/upload/${id}`, file);
};

export const apiPayCash = (data) => {
  return appAxios().post(`${process.env.REACT_APP_BACKEND}/pay`, data);
};
