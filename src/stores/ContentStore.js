import { observable, computed, action, runInAction } from "mobx";

export default class ContentStore {
  @observable cells = {};
  @observable selectedCell = { id: "A1", editable: false };

  constructor({ dbStore, userStore }) {
    this.dbStore = dbStore;
    this.userStore = userStore;
    this.hydrateCells();
  }

  @action
  setCellProperty(id, property, value) {
    this.cells[id] = this.cells[id] || {};
    this.cells[id][property] = value;

    this.dbStore.write(
      `cells/${this.userStore.userId}/${id}/${property}`,
      value
    );
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
    return this.dbStore
      .read(`cells/${this.userStore.userId}`)
      .then(snapshot => {
        runInAction(() => {
          this.cells = snapshot.val() || {};
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
