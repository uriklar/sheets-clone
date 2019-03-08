import React from "react";
import ContentStore from "./ContentStore";
import AppStore from "./AppStore";
import UserStore from "./UserStore";
import DbStore from "./DbStore";
import { db } from "../firebase";

const dbStore = new DbStore({ db });
const userStore = new UserStore({ dbStore });
const contentStore = new ContentStore({ dbStore, userStore });
const appStore = new AppStore({ dbStore, userStore });

export const UserStoreContext = React.createContext(userStore);
export const ContentStoreContext = React.createContext(contentStore);
export const AppStoreContext = React.createContext(appStore);
export const DbStoreContext = React.createContext(dbStore);
