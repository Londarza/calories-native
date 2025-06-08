import Header from "@/src/components/Header/Header";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon, Input } from "react-native-elements";

export default function AddFood() {
  return (
    <View
      style={styles.container}
    >
      <Header />
      <View style={styles.addFoodContainer}>
        <View style={styles.legendContainer}>
          <Text style={styles.addFoodLegend}>Agregar Comida</Text>
        </View>
        <View style={styles.addFoodBtnContainer} >
          <Button
            icon={
              <Icon
                name="add-circle-outline"
                type="ionicon"
                color="white"
                size={24}
              />
            }
            buttonStyle={{
              backgroundColor: '#4ecb71', // color de fondo del botón
              borderRadius: 12,           // para que sea circular
              padding: 12,                // tamaño del botón
            }}
          />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
            <Input
              placeholder="Pollo, Arroz, manzana...."
            />
        </View>
        
            <Button
            title='Buscar'
            titleStyle={styles.searchTitle}
            buttonStyle={{
              backgroundColor: '#ade8af', // color de fondo del botón
              borderRadius: 12,           // para que sea circular
              padding: 12,                // tamaño del botón
              
            }}
          />
        
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    padding:12,
    alignItems:'center'
  },
  addFoodContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:24,
  },
  legendContainer:{
    flex:1
  },
  addFoodBtnContainer:{
    flex:1,
    alignItems:'flex-end'
  },
  addFoodLegend:{
    fontSize:20
  },
  searchContainer:{
    flexDirection:'row'
  },
  inputContainer:{
    flex:1,
    marginLeft:-12
  },
  searchTitle:{
    color: 'black'
  },
})