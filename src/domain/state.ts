import { Contact } from "./contact";

export class State {

    public store!: { contacts: Contact[] };
    public reducers!: {
        addContact: (contact: Contact) => void,
        deleteContact: (email: string) => void
    };

}