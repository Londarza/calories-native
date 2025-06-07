import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'
const staticInfo = {
    name: 'Lautaro Ondarza',
    uri: 'https://pbs.twimg.com/profile_images/1614082871592894468/5WrWDQEd_400x400.jpg',
}
const Header = () => {
  return (
    <View style={styles.container}>
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