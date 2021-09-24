import { createContext } from "react";

import { initialValues } from "./contact";
import { State } from "./state";

export const AppContext = createContext(new State());

export const initialStore = {
    contacts: initialValues
};