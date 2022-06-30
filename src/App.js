
import React from 'react';
import {StyleSheet, View, Image, Text, SafeAreaView, Switch, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpg';



const App = () => {
 
  function handleRedeSocial(rede_social){

    Switch (rede_social) {

      case 'linkedin':
        Alert.alert('Meu Linkedin','http://www.linkedin.com/in/tiago-merc%C3%AAs-ros%C3%A1rio-b6177b85')
        break
      case 'github':
        Alert.alert('Meu GitHub','https://github.com/TiagoMerc/')
        break
      case 'facebook':
        Alert.alert('Meu Facebook','https://twitter.com/TiagoTMR_7?t=wwZHBorEl7dUIguoa8tl7A&s=08')    
        break  
    }
  }

  return (
   <>
      <View style={style.page} >
          <View style={style.container_cabecalho}>
             <Image source={foto} style={style.foto} />
             <Text style={style.nome}>TIAGO MERCÊS</Text>
             <Text style={style.funcao}>Desenvolvedor em formação</Text>
             <View style={style.redes_sociais}>
              <TouchableOpacity onPress={() => handleRedeSocial('github')}>
                <Icon name="github" size={30}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
                <Icon name="facebook" size={30}/>
              </TouchableOpacity> 
              <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}> 
                <Icon name="linkedin" size={30}/>
              </TouchableOpacity>
             </View>
          </View>

       <View style={style.card_container}>
            <View style={style.card}>
              <View style={style.card_header}>
                <Text>Experiência Profissional</Text>
              </View>
              <View style={style.card_content}>
                <Text style={style.card_content_text}>Logo Ali</Text>
                <Text style={style.card_content_text}>Araujo Dados Contábeis</Text>
                <Text style={style.card_content_text}>Alphatech</Text>
              </View>
            </View>
        </View>

        <View style={style.card_container}>
            <View style={style.card}>
              <View style={style.card_header}>
                <Text>Formação Acadêmica</Text>
              </View>
              <View style={style.card_content}>
                <Text style={style.card_content_text}>UFVJM</Text>
                <Text style={style.card_content_text}>COLMINAS</Text>
                <Text style={style.card_content_text}>ALURA</Text>
              </View>
            </View>
        </View>
      </View>
   
   </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',  
    flex: 1,
    alignItems: 'center',
  },
  container_cabecalho: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#939393',
    padding: 10,
    backgroundColor:'FFF',
  },
  card_content: {
    marginTop: 20,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  }
});

export default App;
