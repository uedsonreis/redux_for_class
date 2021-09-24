import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { RectButton } from 'react-native-gesture-handler';

import { AppContext } from '../domain';

export default function ListPage() {

    const { store, reducers } = React.useContext(AppContext);
    const navigation = useNavigation();

    function goEdit() {
        navigation.navigate("Contato");
    }

    function deleteContact(email: string) {
        reducers.deleteContact(email);
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <RectButton onPress={goEdit}>
                <Text>Novo Contato</Text>
            </RectButton>

            <Text></Text>

            { store.contacts.map(contact => (
                <View key={contact.email} style={{ flexDirection: 'row' }}>
                    <Text>{contact.name}: {contact.email} </Text>
                    <RectButton onPress={() => deleteContact(contact.email)}>
                        <Text style={{ color: 'red' }}>Deletar</Text>
                    </RectButton>
                </View>
            )) }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
