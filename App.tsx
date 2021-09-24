import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppContext, initialStore } from './src/domain';
import { createAddContact, createDeleteContact } from './src/domain/contact';
import { State } from './src/domain/state';

import ListPage from './src/pages/List';
import EditPage from './src/pages/Edit';
import createRepository from './src/domain/repository';

const Stack = createNativeStackNavigator();

export default function App() {

    const [store, setStore] = React.useState(initialStore);

    const repository = createRepository(setStore);
    const addContact = createAddContact(store, repository);
    const deleteContact = createDeleteContact(store, repository);

    const initialState: State = { store, reducers: { addContact, deleteContact } };

    return (
        <AppContext.Provider value={initialState}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Agenda" component={ListPage} />
                    <Stack.Screen name="Contato" component={EditPage} />
                </Stack.Navigator>
            </NavigationContainer>
        </AppContext.Provider>
    );
}