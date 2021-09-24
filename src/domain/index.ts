import { createContext } from "react";

import { Contact, initialValues } from "./reducers/contact";

type State = {
    store: { contacts: Contact[] },
    reducers: {
        addContact: (contact: Contact) => void,
        deleteContact: (email: string) => void
    };
}

export const AppContext = createContext<State>({} as State);

export const initialStore = {
    contacts: initialValues
};