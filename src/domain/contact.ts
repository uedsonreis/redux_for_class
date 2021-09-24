import AsyncStorage from '@react-native-async-storage/async-storage';

import { Repository } from '../domain/repository';

export type Contact = { name: string, email: string };

export const initialValues = [
    { name: 'Uedson Reis', email: 'uedsonreis.prof@gmail.com' } as Contact
];

export function createAddContact(store: any, repository: Repository) {
    return function addContact(contact: Contact) {
        const newStore = {
            ...store,
            contacts: [
                ...store.contacts,
                contact
            ]
        };

        repository.persist(newStore);
    }
}

export function createDeleteContact(store: { contacts: Contact[] }, repository: Repository) {
    return function deleteContact(email: string) {
        const newStore = {
            ...store,
            contacts: store.contacts.filter(c => c.email !== email)
        };

        repository.persist(newStore);
    }
}