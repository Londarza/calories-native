import Home from "@/app/Home";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
      <Home/>

      </SafeAreaView>
    </SafeAreaProvider>
);
}

    
