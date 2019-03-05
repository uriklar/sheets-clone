import React, { useContext } from "react";
import { ContentStoreContext } from "../../stores/Provider";
import { observer } from "mobx-react-lite";
import styles from "./Toolbar.module.css";
import Icon from "../common/Icons";
import ToolbarButton from "./ToolbarButton";

export default observer(function Toolbar() {
  const store = useContext(ContentStoreContext);

  const toggleProperty = property =>
    store.setCellProperty(
      store.selectedCell.id,
      property,
      !store.selected[property]
    );

  return (
    <div className={styles.container}>
      <ToolbarButton
        onClick={() => toggleProperty("bold")}
        isSelected={!!store.selected.bold}
      >
        <Icon icon="bold" isSelected={!!store.selected.bold} />
      </ToolbarButton>

      <ToolbarButton
        onClick={() => toggleProperty("italic")}
        isSelected={!!store.selected.italic}
      >
        <Icon icon="italic" isSelected={!!store.selected.italic} />
      </ToolbarButton>

      <ToolbarButton
        onClick={() => toggleProperty("strikethrough")}
        isSelected={!!store.selected.strikethrough}
      >
        <Icon
          icon="strikethrough"
          isSelected={!!store.selected.strikethrough}
        />
      </ToolbarButton>
    </div>
  );
});
