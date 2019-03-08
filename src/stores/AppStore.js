import { observable, action, runInAction } from "mobx";

export default class AppStore {
  @observable sheetName = "";
  @observable rows = 10;

  constructor({ db, userStore }) {
    this.db = db;
    this.userStore = userStore;
    this.hydrateApp();
  }

  @action
  setSheetName(name) {
    this.sheetName = name;
    document.title = `${name} - Google Sheets`;
    this.db.ref(`appData/${this.userStore.userId}/sheetName`).set(name);
  }

  @action
  addRows(rows) {
    this.rows += Number(rows);
  }

  @action
  hydrateApp() {
    return this.db
      .ref(`appData/${this.userStore.userId}`)
      .once("value")
      .then(snapshot => {
        runInAction(() => {
          const appData = snapshot.val();

          this.sheetName = appData.sheetName;
          document.title = `${this.sheetName} - Google Sheets`;
        });
      });
  }
}
