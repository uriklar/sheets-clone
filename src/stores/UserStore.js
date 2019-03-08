import { observable, action, runInAction } from "mobx";

export default class UserStore {
  @observable imageUrl = null;
  @observable userId = null;

  constructor({ dbStore }) {
    this.dbStore = dbStore;
    let userId = localStorage.getItem("GOOGLE_SHEETS_CLONE_USER_ID");

    if (userId) {
      this.hydrateUser(userId);
    } else {
      userId = Math.random()
        .toString(36)
        .substr(2, 11);
      localStorage.setItem("GOOGLE_SHEETS_CLONE_USER_ID", userId);
    }

    this.userId = userId;
  }

  @action
  setAvatar(response) {
    this.imageUrl = response.profileObj.imageUrl;
    this.dbStore.write(`avatars/${this.userId}`, this.imageUrl);
  }

  @action
  hydrateUser(userId) {
    return this.dbStore.read(`avatars/${userId}`).then(snapshot => {
      runInAction(() => {
        this.imageUrl = snapshot.val();
      });
    });
  }
}
