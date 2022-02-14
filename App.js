import "./firebase-api/firebase-init.js";
import "./firebase-api/firebase-firestore.js";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Center, Flex, NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./components/sign-in/home/Home.jsx";
export default function App() {
    return (
        <Provider store={store}>
            <NativeBaseProvider>
                <Flex h={"100%"} safeArea>
                        <Home />
                </Flex>
                <StatusBar style="auto" />
            </NativeBaseProvider>
        </Provider>
    );
}
