import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [ pokemonEscolhido, setPokemonEscolhido ] = useState(null);
  const getCepData = (cep) => {
    //const endpoint = `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`;
    const endpoint = `viacep.com.br/ws/${cep}/json/`
    fetch(endpoint)
    .then(resposta => resposta.json())
    .then(json => {
      const pokemon = {
        nome: json.name,
        img: json.sprites.other["official-artwork"].front_default,
        peso: json.weight,
      };
 
      setPokemonEscolhido(pokemon);
    })
    .catch(()=>{
      Alert.alert('Erro', 'Não foi possivel carregar os dados do Pekemon')
    })
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
