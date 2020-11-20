import {appAxios} from '../libs/axios'

export const apiFetchMachine = () => {
    return appAxios().get(`${process.env.REACT_APP_BACKEND}/machine`)
}
export const apiFetchMachineGroup = () => {
    return appAxios().get(`${process.env.REACT_APP_BACKEND}/machine-group`)
}
export const apiFetchMachineHowToPlay = (id) => {
    return appAxios().get(`${process.env.REACT_APP_BACKEND}/machine/${id}/howtoplay`)
}
export const apiCreateMachine = (data) => {
    return appAxios().post(`${process.env.REACT_APP_BACKEND}/machine`, data)
}
export const apiFetchMachineId = (id) => {
    return appAxios().post(`${process.env.REACT_APP_BACKEND}/machine/${id}`)
}