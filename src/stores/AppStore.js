import { observable, action } from "mobx";

export default class AppStore {
  @observable sheetName = "";
  @observable rows = 10;

  @action
  setSheetName(name) {
    this.sheetName = name;
  }

  @action
  addRows(rows) {
    this.rows += Number(rows);
  }
}
