import { observable, action } from "mobx";

export default class AppStore {
  @observable sheetName = "";

  @action
  setSheetName(name) {
    this.sheetName = name;
  }
}
