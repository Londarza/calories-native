import Header from "@/src/components/Header/Header";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon } from "react-native-elements";

// 5:11 para continuar

export default function Home() {
  const router = useRouter()
  const handleCaloriesOnPress =() =>{
    router.push({
                            pathname: "/AddFood",
                        })
  }
  return (
    <View
      style={styles.container}
    >
      <Header />
      <View style={styles.caloriesContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.caloriesLegend}>Calories</Text>
        </View>
        <View style={styles.rigthContainer}>

          <Button
            onPress={handleCaloriesOnPress}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    alignItems: "center",
    backgroundColor: '#fff',
    flex: 1
  },
  caloriesContainer: {
    alignItems: 'center',
    marginVertical: 24,
    flexDirection: 'row'
  },
  leftContainer: {
    flex: 1,
    justifyContent:'center'
  },
  rigthContainer: {
    flex: 1,
    alignItems:'flex-end',
    justifyContent:'center'
  },
  caloriesLegend:{
    fontSize:22
  }
})