import React, { useState } from 'react';
import { Alert, View, ScrollView, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';

export default function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    ibge: '',
    gia: '',
    ddd: '',
    siafi: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  function handleCepChange(cep) {
    setCep(cep);
  }

  const getCep = (cep) => {
    setIsLoading(true);

    if(cep == ''){
      
      Alert.alert('Erro', 'Campo cep em branco!');
      setIsLoading(false);
      return;
    }

    const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
    //console.log(endpoint);
    fetch(endpoint)
      .then((resposta) => resposta.json())
      .then((json) => {
        const endereco = {
          logradouro: json.logradouro,
          complemento: json.complemento,
          bairro: json.bairro,
          localidade: json.localidade,
          uf: json.uf,
          ibge: json.ibge,
          gia: json.gia,
          ddd: json.ddd,
          siafi: json.siafi,
          erro: json.erro
        };

        if(endereco.erro == true){
          Alert.alert('Erro', 'Cep não localizado!');
        } else {
          setEndereco(endereco);
        }
      })
      .catch((error) => {
        //console.log(error);
        Alert.alert('Erro', 'Não foi possível carregar os dados do Endereço');
      })
      .finally(()=> {
        setIsLoading(false);
      });
  };

  const limparCampos = () => {
    setCep('');
    setEndereco({
      logradouro: '',
      complemento: '',
      bairro: '',
      localidade: '',
      uf: '',
      ibge: '',
      gia: '',
      ddd: '',
      siafi: '',
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.topo}>
          <Text style={styles.topoTitulo}>Localizador de Endereço</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text>CEP:</Text>
          <TextInput
            value={cep}
            onChangeText={handleCepChange}
            placeholder="Digite o CEP"
            style={styles.input}
            maxLength={8}
          />
        </View>
        <View style={styles.buttonContainer}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#000" />
          ) : (
          <Button title="Buscar" onPress={() => getCep(cep)} color="#000" />
          )}
        </View>
        <View style={styles.enderecoContainer}>
          <Text>Logradouro:</Text>
          <Text>{endereco.logradouro}</Text>
        </View>
        <View style={styles.enderecoContainer}>
          <Text>Complemento:</Text>
          <Text>{endereco.complemento}</Text>
        </View>
        <View style={styles.enderecoContainer}>
          <Text>Bairro:</Text>
          <Text>{endereco.bairro}</Text>
        </View>
        <View style={styles.enderecoContainer}>
          <Text>Localidade:</Text>
          <Text>{endereco.localidade}</Text>
        </View>
        <View style={styles.enderecoContainer}>
          <Text>UF:</Text>
          <Text>{endereco.uf}</Text>
        </View>
        <View style={styles.enderecoContainer}>
          <Text>IBGE:</Text>
          <Text>{endereco.ibge}</Text>
        </View>
        <View style={styles.enderecoContainer}>
          <Text>GIA:</Text>
          <Text>{endereco.gia}</Text>
        </View>
        <View style={styles.enderecoContainer}>
          <Text>DDD:</Text>
          <Text>{endereco.ddd}</Text>
        </View>
        <View style={styles.enderecoContainer}>
          <Text>SIAFI:</Text>
          <Text>{endereco.siafi}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Limpar" onPress={limparCampos} color={'#000'}/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollView: { padding: 20 },
  topo: {
    height: 100,
    marginBottom: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topoTitulo: {
    fontSize: 22,
    marginBottom: 10,
    color: '#fff',
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d5d5d5',
    borderRadius: 4,
    padding: 10,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  enderecoContainer: {
    marginBottom: 10,
  },
});
