import {appAxios} from '../libs/axios'

export const apiFetchUsers = () => {
    return appAxios().get(`${process.env.REACT_APP_BACKEND}/users`)
}

export const apiFetchUsersID = (id) => {
    return appAxios().get(`${process.env.REACT_APP_BACKEND}/users/${id}`)
}

