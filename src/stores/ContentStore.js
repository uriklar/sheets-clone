import { observable, computed } from "mobx";

export default class ContentStore {
  @observable cells = {};
  @observable selectedCell = { id: "A1", editable: false };

  setCellProperty(id, property, value) {
    this.cells[id] = this.cells[id] || {};
    this.cells[id][property] = value;
  }

  getCellProperty(id, property) {
    return this.cells[id] ? this.cells[id][property] : "";
  }

  select(id) {
    this.selectedCell = { id };
  }

  edit(id) {
    this.selectedCell = { id, editable: true };
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
