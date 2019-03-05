import { observable, action } from "mobx";

export default class UserStore {
  @observable user = null;

  @action
  setUser(user) {
    this.user = user;
  }
}
