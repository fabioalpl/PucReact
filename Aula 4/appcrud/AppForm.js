
import React, { useState, useEffect } from 'react'; 
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, TextInput} from 'react-native'
import { styles } from './style';
import Database from './Database';
import { Feather as Icon } from '@expo/vector-icons';

export default function AppForm({route, navigation}){

    const id = route.params ? route.params.id : undefined;
    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState('');

    function handleDescriptionChange(descricao){setDescricao(descricao);}
    function handleQuantityChange(quantidade){ setQuantidade(quantidade); } 
    async function handleButtonPress(){
        //console.log({id: new Date().getTime(), descricao, quantidade});   
        const listItem = {id: new Date().getTime(), descricao, quantidade: parseInt(quantidade)};
        /*let savedItems = [];
        const response = await AsyncStorage.getItem('items');

        if(response)savedItems = JSON.parse(response);
        savedItems.push(listItem);

        navigation.navigate("AppList"); */
        Database.saveItem(listItem, id)
        .then(response => navigation.navigation("AppItem", listItem))
    }
    useEffect(() => {
        if(!route.params) return;
        setDescricao(route.params.descricao)
        setQuantidade(route.params.quantidade.toString())
    }, [route])

    return (
        <View style={styles.containerForm}>
            <Text style={styles.title}>Item para comprar</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    onChangeText={handleDescriptionChange}
                    placeholder="O que está faltando em casa?"
                    clearButtonMode="always"
                    value={descricao}
                />
                <TextInput 
                    style={styles.input}
                    onChangeText={handleQuantityChange}
                    placeholder="Digitar a quantidade"
                    clearButtonMode="always"
                    value={quantidade.toString()}
                />
                <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                <View style={styles.buttonContainer}>
                    <Icon name="save" color="white" size={22} />
                    <Text style={styles.buttonsText}>Salvar</Text>
                </View>
                </TouchableOpacity>
            </View>
            <StatusBar style="light"></StatusBar>
        </View>
    )
}