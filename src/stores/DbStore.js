import { observable, runInAction, action } from "mobx";

export default class DbStore {
  @observable isSaving = false;

  constructor({ db }) {
    this.db = db;
  }

  @action
  write(path, value) {
    this.isSaving = true;
    this.db.ref(path).set(value, error => {
      if (error) {
        // The write failed...
      } else {
        runInAction(() => {
          this.isSaving = false;
        });
      }
    });
  }

  read(path) {
    return this.db.ref(path).once("value");
  }
}
