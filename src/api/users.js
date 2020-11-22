import { appAxios } from "../libs/axios";

export const apiFetchUsers = () => {
  return appAxios().get(`${process.env.REACT_APP_BACKEND}/users`);
};

export const apiFetchUsersID = (id) => {
  return appAxios().get(`${process.env.REACT_APP_BACKEND}/users/${id}`);
};

export const apiCreateUser = (data) => {
  return appAxios().post(`${process.env.REACT_APP_BACKEND}/users`, data);
};

export const apiFetchUserByUserId = (user_id) => {
  return appAxios().get(
    `${process.env.REACT_APP_BACKEND}/user/type/${user_id}`
  );
};

export const apiFetchPendingUsers = () => {
  return appAxios().get(`${process.env.REACT_APP_BACKEND}/userspending`);
};

export const apiApproveMember = (data) => {
  return appAxios().put(`${process.env.REACT_APP_BACKEND}/approve`, data);
};

export const apiDeleteMember = (data) => {
  return appAxios().put(`${process.env.REACT_APP_BACKEND}/user`, data);
};

export const apiUpdateProfile = (data, id) => {
  return appAxios().put(`${process.env.REACT_APP_BACKEND}/user/${id}`, data);
};
