
import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpg';
import Card from './components/Card'

const App = () => {
 
  function handleRedeSocial(rede_social){

    switch (rede_social) {

      case 'linkedin':
        Alert.alert('Meu Linkedin','http://www.linkedin.com/in/tiago-merc%C3%AAs-ros%C3%A1rio-b6177b85');
        break
      case 'github':
        Alert.alert('Meu GitHub','https://github.com/TiagoMerc/');
        break
      case 'twitter':
        Alert.alert('Meu Twitter','https://twitter.com/TiagoTMR_7?t=wwZHBorEl7dUIguoa8tl7A&s=08');    
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
              <TouchableOpacity onPress={() => handleRedeSocial('twitter')}>
                <Icon name="twitter" size={30}/>
              </TouchableOpacity> 
              <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}> 
                <Icon name="linkedin" size={30}/>
              </TouchableOpacity>
             </View>
          </View>

/** Chamando o componentes*/
    <Card titulo="Formação Acadêmica">
            <Text style={style.card_content_text}>UFVJM</Text>
            <Text style={style.card_content_text}>COLMINAS</Text>
            <Text style={style.card_content_text}>Wise Up</Text>
    </ Card>
    <Card titulo="Experiências Profissionais">
             <Text style={style.card_content_text}>Logo Ali</Text>
             <Text style={style.card_content_text}>Araujo Dados Contábeis</Text>
             <Text style={style.card_content_text}>Alphatech</Text>
    </Card>

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
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  }
});

export default App;
