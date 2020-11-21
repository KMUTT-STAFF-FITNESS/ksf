import { appAxios } from "../libs/axios";

export const apiFetchMachine = () => {
  return appAxios().get(`${process.env.REACT_APP_BACKEND}/machine`);
};
export const apiFetchMachineGroup = () => {
  return appAxios().get(`${process.env.REACT_APP_BACKEND}/machinegroup`);
};
export const apiFetchMachineType = () => {
  return appAxios().get(`${process.env.REACT_APP_BACKEND}/machinetype`);
};
export const apiFetchMachineHowToPlay = (id) => {
  return appAxios().get(
    `${process.env.REACT_APP_BACKEND}/machine/${id}/howtoplay`
  );
};
export const apiCreateMachine = (data) => {
  return appAxios().post(`${process.env.REACT_APP_BACKEND}/machine`, data);
};
export const apiFetchMachineId = (id) => {
  return appAxios().get(`${process.env.REACT_APP_BACKEND}/machine/${id}`);
};

export const apiEditMachine = (data) => {
  return appAxios().put(`${process.env.REACT_APP_BACKEND}/machine`, data);
};
export const apiDeleteMachine = (data) => {
  return appAxios().put(`${process.env.REACT_APP_BACKEND}/machinedelete`, data);
};
