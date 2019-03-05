import React from "react";
import ContentStore from "./ContentStore";
import AppStore from "./AppStore";
import UserStore from "./UserStore";

export const ContentStoreContext = React.createContext(new ContentStore());
export const AppStoreContext = React.createContext(new AppStore());
export const UserStoreContext = React.createContext(new UserStore());
