import { observable, action, runInAction } from "mobx";

export default class AppStore {
  @observable sheetName = "";
  @observable rows = 10;

  constructor({ dbStore, userStore }) {
    this.dbStore = dbStore;
    this.userStore = userStore;
    this.hydrateApp();
  }

  @action
  setSheetName(name) {
    this.sheetName = name;
    document.title = `${name} - Google Sheets`;
    this.dbStore.write(`appData/${this.userStore.userId}/sheetName`, name);
  }

  @action
  addRows(rows) {
    this.rows += Number(rows);
  }

  @action
  hydrateApp() {
    return this.dbStore
      .read(`appData/${this.userStore.userId}`)
      .then(snapshot => {
        runInAction(() => {
          const appData = snapshot.val();

          this.sheetName = appData.sheetName;
          document.title = `${this.sheetName} - Google Sheets`;
        });
      });
  }
}
