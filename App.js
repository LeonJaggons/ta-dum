import "./firebase-api/firebase-init.js";
import "./firebase-api/firebase-firestore.js";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
    Box,
    Center,
    Flex,
    HStack,
    NativeBaseProvider,
    Text,
    VStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import {
    auth,
    createTaDumUserFromGoogle,
    createTDID,
    isTaDumUser,
    signInTaDumUser,
    signInWithGoogle,
} from "./firebase-api/firebase-auth.js";

import { Provider } from "react-redux";
import store from "./redux/store";
export default function App() {
    return (
        <Provider store={store}>
            <NativeBaseProvider>
                <Flex h={"100%"} safeArea>
                    <Center flexGrow={1}>APP</Center>
                </Flex>
                <StatusBar style="auto" />
            </NativeBaseProvider>
        </Provider>
    );
}
