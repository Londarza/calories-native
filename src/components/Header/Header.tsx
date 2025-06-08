import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import styles from './styles';


const staticInfo = {
    name: 'Lautaro Ondarza',
    uri: 'https://pbs.twimg.com/profile_images/1614082871592894468/5WrWDQEd_400x400.jpg',
}
const Header = () => {
   const navigation = useNavigation();
  const router = useRouter();
  return (
    <View style={styles.container}>
       {navigation.canGoBack() && (
        <View style={styles.arrowContainer}>
          <Button
            onPress={() => router.back()}
            icon={
              <Icon
                name="arrow-left"
                type="SimpleLineIcons"
                color="white"
                size={16}
              />
            }
            buttonStyle={{
              backgroundColor: '#4ecb71', // color de fondo del botón
              borderRadius: 12,           // para que sea circular
              padding: 12,                // tamaño del botón
            }}
          />
        </View>
      )}
        <View style={styles.leftContainer}>
            <Text style={styles.name}> {`Bienvenido ${staticInfo.name}`}</Text>
            <Text style={styles.underText}>Espero que alcances tus objetivos </Text>
        </View>
        <View style={styles.rightContainer}>
            <Image source={{uri:staticInfo.uri}} style={styles.image}/>
        </View>
    </View>
  )
}

export default Header