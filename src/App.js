import React, { Component } from "react";
import "./assets/stylesheets/reset.css";
import styles from "./App.module.css";

import Header from "./components/header/Header";
import Grid from "./components/grid/Grid";
import FormulaBar from "./components/formula-bar/FormulaBar";
import Toolbar from "./components/toolbar/Toolbar";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Header />
        <Toolbar />
        <FormulaBar />
        <Grid />
      </div>
    );
  }
}

export default App;
