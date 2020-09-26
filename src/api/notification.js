import {appAxios} from '../libs/axios'

export const apiFetchNotification = () => {
    return appAxios().get(`${process.env.REACT_APP_BACKEND}/notification`)
}
export const apiCreateNotification = (data) => {
    return appAxios().post(`${process.env.REACT_APP_BACKEND}/notification`, data)
}