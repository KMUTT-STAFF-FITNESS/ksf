import {appAxios} from '../libs/axios'

export const apiFetchUsers = () => {
    return appAxios().get(`${process.env.REACT_APP_BACKEND}/users`)
}

export const apiFetchUsersID = (id) => {
    return appAxios().get(`${process.env.REACT_APP_BACKEND}/users/${id}`)
}

export const apiCreateUser = (data) => {
    return appAxios().post(`${process.env.REACT_APP_BACKEND}/users`, data)
}

