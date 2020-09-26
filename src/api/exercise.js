import {appAxios} from '../libs/axios'

export const apiCreateExercise = (data) => {
    return appAxios().post(`${process.env.REACT_APP_BACKEND}/exercise`, data)
}
export const apiFetchExerciseId = (id) => {
    return appAxios().get(`${process.env.REACT_APP_BACKEND}/exercise/${id}`)
}