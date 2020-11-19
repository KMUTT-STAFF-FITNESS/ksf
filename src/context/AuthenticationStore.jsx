import { observable, action, computed } from 'mobx'
import Cookies from 'js-cookie'
import { apiCheckAuth, apiLogin } from '../api/login'

export class AuthenticationStore {
  @observable currentUser = null

  @computed get currentUserId() {
    return this.currentUser?.user_id
  }

  @computed get currentUserName() {
    return this.currentUser?.name
  }

  @computed get currentUserCompanyId() {
    return this.currentUser?.company_id
  }

  @computed get currentUserRoleId() {
    return this.currentUser?.role_id
  }

  @computed get is_auth() {
    const accessToken = Cookies.get(process.env.REACT_APP_ACCESS_TOKEN_NAME)
    return accessToken
  }

  @action async me() {
    const { data } = await apiCheckAuth()
    this.currentUser = data.user
    return data
  }

  @action setCurrentUser(user) {
    this.currentUser = user
  }
  @action setCurrentUserName(name) {
    this.currentUser.name = name
  }

  @action async signIn({ username, password, isRemember }) {
    const formData = new FormData()
    formData.set('data', JSON.stringify({ username, password, isRemember }))
    const response = await apiLogin(formData)
    const { token } = response.data
    this.setToken(token)
    return response
  }

  @action signOut() {
    this.currentUser = null
    this.romoveToken()
  }

  @action setToken(token) {
    Cookies.set(process.env.REACT_APP_ACCESS_TOKEN_NAME, token.access_token)
  }

  @action romoveToken() {
    Cookies.remove(process.env.REACT_APP_ACCESS_TOKEN_NAME)
  }
}
