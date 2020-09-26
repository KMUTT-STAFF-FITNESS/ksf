import {appAxios} from '../libs/axios'

export const apiFetchReportProblem = () => {
    return appAxios().get(`${process.env.REACT_APP_BACKEND}/report/problem`)
}
export const apiFetchReportTemplate = (id) => {
    return appAxios().get(`${process.env.REACT_APP_BACKEND}/report/template/${id}`)
}

export const apiCreateReportProblem = (data) => {
    return appAxios().post(`${process.env.REACT_APP_BACKEND}/report/problem`, data)
}

export const apiCreateReportTemplate = (data) => {
    return appAxios().post(`${process.env.REACT_APP_BACKEND}/report/template`, data)
}