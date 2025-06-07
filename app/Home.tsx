import Header from "@/src/components/Header/Header";
import { StyleSheet, Text, View } from "react-native";
// 4:42 para continuar

export default function Home() {
  return (
    <View
      style={styles.container}
    >
      <Header/>
      <Text>Esta es la Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
        flex: 1,
        padding: 12,
        alignItems: "center",
      }
})