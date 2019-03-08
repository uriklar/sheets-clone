import { observable, computed, action, runInAction } from "mobx";

export default class ContentStore {
  @observable cells = {};
  @observable selectedCell = { id: "A1", editable: false };

  constructor({ db, userStore }) {
    this.db = db;
    this.userStore = userStore;
  }

  @action
  setCellProperty(id, property, value) {
    this.cells[id] = this.cells[id] || {};
    this.cells[id][property] = value;

    if (this.userStore.user) {
      this.db
        .ref(`cells/${this.userStore.user.googleId}/${id}/${property}`)
        .set(value);
    }
  }

  getCellProperty(id, property) {
    return this.cells[id] ? this.cells[id][property] : "";
  }

  @action
  select(id) {
    this.selectedCell = { id };
  }

  @action
  edit(id) {
    this.selectedCell = { id, editable: true };
  }

  @action
  hydrateCells() {
    return this.db
      .ref(`cells/${this.userStore.user.googleId}`)
      .once("value")
      .then(snapshot => {
        runInAction(() => {
          this.cells = snapshot.val();
        });
      });
  }

  cellClassNames(id) {
    return Object.keys(this.cells[id] || {}).reduce((acc, key) => {
      return !!this.cells[id][key] ? acc + ` ${key}` : acc;
    }, "");
  }

  @computed
  get selected() {
    return this.cells[this.selectedCell.id] || {};
  }
}
