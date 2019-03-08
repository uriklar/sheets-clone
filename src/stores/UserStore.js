import { observable, action } from "mobx";

export default class UserStore {
  @observable user = null;

  constructor(db) {
    this.db = db;
  }

  @action
  setUser(user) {
    this.user = user;
  }
}
