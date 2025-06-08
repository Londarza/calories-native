import Header from "@/src/components/Header/Header";
import { StyleSheet, Text, View } from "react-native";

export default function AddFood() {
  return (
    <View
      style={styles.container}
    >
      <Header/>
      <Text>Esta es la Pagina para agregar comida</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 12,
    alignItems: "center",
    backgroundColor: '#fff',
    flex: 1
  }
})