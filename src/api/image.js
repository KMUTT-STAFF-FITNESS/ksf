import {appAxios} from '../libs/axios'

export const apiUploadSlip = (data) => {
    return appAxios().post(`${process.env.REACT_APP_BACKEND}/upload`,data)
}