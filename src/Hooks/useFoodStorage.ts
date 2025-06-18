import AsyncStorage from '@react-native-async-storage/async-storage';
import { IMeal } from '../constants/types';

const useFoodStorage =  ()=>{
    //definir las keys
    const MYFOODKEY = '@MyFoodKey'

    const handleSaveFood = async ({calories, name, portion }:IMeal)=>{
        try {
            // traer, si hay, lo guardado en storage
        const currentSaveFood = await AsyncStorage.getItem(MYFOODKEY)

        // validar, agregar los argumentos con la nueva  comida
        if (currentSaveFood !== null) {
            const currentParsed = JSON.parse(currentSaveFood)
            currentParsed.push({
                calories, name, portion
            })
        // guardar en storage la comida vieja + nueva, stringifeada
            await AsyncStorage.setItem(MYFOODKEY, JSON.stringify(currentParsed))
        }

        
            
        } catch (error) {
            console.error(error)
        }
        
    }

    const handleGetFoods = () =>{}

    return {
        onSaveFood: handleSaveFood,
        onGetFood: handleGetFoods
    }
}
export default useFoodStorage