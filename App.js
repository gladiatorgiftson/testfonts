import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    alloyInk: require("./assets/fonts/AlloyInk-nRLyO.ttf"),
    balckBerry: require("./assets/fonts/BlackberryJamPersonalUse-rXOB.ttf"),
    cinderlla: require("./assets/fonts/CinderelaPersonalUseRegular-RDvM.ttf"),
    tomatoes: require("./assets/fonts/Tomatoes-O8L8.ttf"),
    tamil : require('./assets/fonts/NotoSansTamil-Black.ttf'),
    Inter_900Black,
  });
  const tamil  = "வணக்கம"
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.fontAlloyInk}>Hello world</Text>
        <Text style={styles.fontBlackBerry}>Hello world</Text>
        <Text style={styles.fontCinderlla}>Hello world</Text>
        <Text style={styles.fontTomato}>Hello world</Text>
        <Text style={styles.fontTamil}>{tamil}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 40,
    width : '100%',
    backgroundColor : 'grey',
    width : "100%",
  },
  fontAlloyInk: {
    fontFamily: "alloyInk",
    fontSize: 40,
  },
  fontBlackBerry: {
    fontFamily: "balckBerry",
    fontSize: 40,
  
  },
  fontCinderlla: {
    fontFamily: "cinderlla",
    fontSize: 40,
  },
  fontTomato: {
    fontFamily: "tomatoes",
    fontSize : 40,

  },fontTamil : {
    fontFamily  :"tamil",
    fontSize : 40
  }
});
