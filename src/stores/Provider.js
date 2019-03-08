import React from "react";
import ContentStore from "./ContentStore";
import AppStore from "./AppStore";
import UserStore from "./UserStore";
import { db } from "../firebase";

const userStore = new UserStore(db);
const contentStore = new ContentStore({ db, userStore });
const appStore = new AppStore({ db, userStore });

export const UserStoreContext = React.createContext(userStore);
export const ContentStoreContext = React.createContext(contentStore);
export const AppStoreContext = React.createContext(appStore);
