import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import { styles } from './style';
import { Feather as Icon } from '@expo/vector-icons';

export default function AppItem(props){

    async function handleEditPress(){
        const item = await Database.getItem(props.id);
        props.navigation.navigate("AppForm", item);
    }
    
    function handleDeletePress(){
        Alert.alert(
          "Atenção",
          "Você tem certeza que deseja excluir este item?",
          [
              {
              text: "Não",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
              },
              { text: "Sim", onPress: () => /*console.log(`${props.id} deleted`*/
                Database.deleteItem(props.id)
                .then(response => props.navigation.navigate("AppList", {id: props.id}))
                }
          ],
          { cancelable: false }
          );
      }

    return (        
        <View style={styles.containerItem}>
            <Text style={styles.textItem}>{props.item}</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.deleteButton} 
                    onPress={handleDeletePress}>
                        <Icon name="trash" color="white" size={18} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.editButton} 
                    onPress={handleEditPress}>
                    <Icon name="edit" color="white" size={18} />
                </TouchableOpacity>
            </View>
        </View>
    );
}