import { observable, action, runInAction } from "mobx";

export default class UserStore {
  @observable imageUrl = null;
  @observable userId = null;

  constructor(db) {
    this.db = db;
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
    this.db.ref(`avatars/${this.userId}`).set(this.imageUrl);
  }

  @action
  hydrateUser(userId) {
    return this.db
      .ref(`avatars/${userId}`)
      .once("value")
      .then(snapshot => {
        runInAction(() => {
          this.imageUrl = snapshot.val();
        });
      });
  }
}
