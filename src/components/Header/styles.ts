import { StyleSheet } from 'react-native'

const styles= StyleSheet.create(
    {
        container:{
            flexDirection: 'row'
        },
        leftContainer:{
            flex: 1,
            justifyContent: 'center'
        },
        rightContainer:{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center'
        },
        name: {
            fontWeight:'bold',
            fontSize: 14
        },
        underText:{
            fontSize: 12,
            color: '#808080'
        },
        image:{
            width:50,
            height: 50,
            borderRadius: 30
        },
        arrowContainer:{}

    }
)

export default styles