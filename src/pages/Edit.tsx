import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { TextInput, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { AppContext } from '../domain';

export default function EditPage() {

    const navigation = useNavigation();
    const { reducers } = React.useContext(AppContext);

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    function saveContact() {
        reducers.addContact({ name, email });
        navigation.goBack();
    }

    return (
        <View>
            <Text>Nome:</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                value={name} onChangeText={setName}
            />

            <Text>Email:</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                value={email} onChangeText={setEmail}
            />

            <RectButton onPress={saveContact}>
                <Text>Salvar</Text>
            </RectButton>
        </View>
    );

}