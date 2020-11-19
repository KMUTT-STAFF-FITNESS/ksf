import { observable, action, computed } from "mobx";
import Cookies from "js-cookie";
import { apiFecthLogin, apiFetchMe } from "../api/login";

export class AuthenticationStore {
  @observable currentUser = null;

  @computed get currentUserId() {
    return this.currentUser?.user_id;
  }

  @computed get currentUserName() {
    return this.currentUser?.name;
  }

  @computed get currentUserCompanyId() {
    return this.currentUser?.company_id;
  }

  @computed get currentUserRoleId() {
    return this.currentUser?.role_id;
  }

  @computed get is_auth() {
    const accessToken = Cookies.get(process.env.REACT_APP_ACCESS_TOKEN_NAME);
    return accessToken;
  }

  @action async me() {
    const { data } = await apiFetchMe();
    this.currentUser = data.user;
    return data;
  }

  @action setCurrentUser(user) {
    this.currentUser = user;
  }
  @action setCurrentUserName(name) {
    this.currentUser.name = name;
  }

  @action async signIn(data) {
    const response = await apiFecthLogin(data);
    console.log(response);
    const { token } = response.data;
    this.setToken(token);
    return response;
  }

  @action signOut() {
    this.currentUser = null;
    this.removeToken();
  }

  @action setToken(token) {
    Cookies.set(process.env.REACT_APP_ACCESS_TOKEN_NAME, token.token);
  }

  @action removeToken() {
    Cookies.remove(process.env.REACT_APP_ACCESS_TOKEN_NAME);
  }
}
