import { IAddFoodModalsProps } from '@/src/constants/types'
import React, { FC, useEffect, useState } from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'
import { Button, Icon, Input } from 'react-native-elements'


const AddFoodModal: FC<IAddFoodModalsProps> = ({ onClose, isVisible }) => {

    const [calories, setCalories] = useState<string>('')
    const [foodName, setFoodName] = useState<string>('')
    const [foodPorcion, setFoodPorcion] = useState<string>('')

    const handleOnPress = ()=>{



        
        onClose()
    }

    useEffect(() => {
        setCalories('')
        setFoodName('')
        setFoodPorcion('')
    }, [isVisible])


    return (
        <Modal
            visible={isVisible}
            onRequestClose={onClose}
            transparent
            animationType='fade'
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.closeContainer}>
                        <Button
                            onPress={onClose}
                            icon={
                                <Icon
                                    name="close-outline"
                                    type="ionicon"
                                    color="black"
                                    size={28}
                                />
                            }
                            buttonStyle={{
                                backgroundColor: 'transparent', // color de fondo del botón
                                borderRadius: 12,           // para que sea circular 
                            }}
                        />
                    </View>
                    <View style={styles.formItem}>
                        <View style={styles.inputContainer}>
                            <Input value={calories} onChangeText={(text: string) => setCalories(text)} />
                        </View>
                        <View style={styles.legendContainer}>
                            <Text style={styles.legend}>KCAL</Text>
                        </View>
                    </View>
                    <View style={styles.formItem}>
                        <View style={styles.inputContainer}>
                            <Input value={foodName} onChangeText={(text: string) => setFoodName(text)} />
                        </View>
                        <View style={styles.legendContainer}>
                            <Text style={styles.legend}>Nombre</Text>
                        </View>
                    </View>
                    <View style={styles.formItem}>
                        <View style={styles.inputContainer}>
                            <Input value={foodPorcion} onChangeText={(text: string) => setFoodPorcion(text)} />
                        </View>
                        <View style={styles.legendContainer}>
                            <Text style={styles.legend}>Porcion</Text>
                        </View>
                    </View>
                    <View style={styles.addButtonContainer}>
                        <Button
                            disabled={foodName.trim() === '' || calories.trim() === '' || foodPorcion.trim() === ''}
                            title={'Agregar'}
                            onPress={handleOnPress}

                            icon={
                                <Icon
                                    name="add-circle-outline"
                                    type="ionicon"
                                    color="#fff"
                                    size={28}
                                />
                            }
                            buttonStyle={{
                                backgroundColor: '#4ecb71', // color de fondo del botón
                                borderRadius: 12,           // para que sea circular 
                            }}
                        />
                    </View>

                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    content: {
        width: '75%',
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10
    },
    closeContainer: {
        alignItems: 'flex-end'
    },
    formItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    legendContainer: {
        flex: 1
    },
    inputContainer: {
        flex: 2,

    },
    legend: {
        fontWeight: 500
    },
    addButtonContainer: {
        alignItems: 'flex-end'
    }


})

export default AddFoodModal