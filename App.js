import "./firebase-api/firebase-init.js";
import "./firebase-api/firebase-firestore.js";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Box, Heading, NativeBaseProvider, Stack } from "native-base";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./components/home/Home.jsx";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./components/sign-in/SignIn.jsx";
import Snip from "./components/snip/Snip.jsx";
import Messages from "./components/Messages.jsx";

const Tabs = createBottomTabNavigator();
const Stacks = createNativeStackNavigator();
export default function App() {
    return (
        <Provider store={store}>
            <NativeBaseProvider>
                <TadumNavigation />
            </NativeBaseProvider>
        </Provider>
    );
}

const TadumNavigation = () => {
    const [signedIn, setSignedIn] = useState(true);
    const TadumNavIcon = ({ name, focused, color, size }) => {
        return (
            <Ionicons
                name={"ios-" + name + (focused ? "" : "-outline")}
                size={19}
                color={color}
            />
        );
    };
    const AppItems = [
        { name: "Home", component: TadumContentContainer, icon: "home" },
        { name: "Snip", component: Snip, icon: "cut" },
        {
            name: "Recipes",
            component: TadumContentContainer,
            icon: "restaurant",
        },
        {
            name: "Shopping Lists",
            component: TadumContentContainer,
            icon: "cart",
        },
        {
            name: "Messages",
            component: Messages,
            icon: "chatbox",
        },
    ];
    return (
        <NavigationContainer>
            {!signedIn ? (
                <Stacks.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stacks.Screen name={"Sign In"} component={SignIn} />
                </Stacks.Navigator>
            ) : (
                <Tabs.Navigator
                    screenOptions={{
                        tabBarStyle: { paddingBottom: 3 },
                        tabBarActiveTintColor: "#F2B33D",
                        headerShown: false,
                    }}
                >
                    {AppItems.map((item, idx) => (
                        <Tabs.Screen
                            key={"SCREEN-" + idx}
                            name={item.name}
                            component={item.component}
                            options={{
                                tabBarIcon: ({ focused, color, size }) => (
                                    <TadumNavIcon
                                        focused={focused}
                                        color={color}
                                        size={size}
                                        name={item.icon}
                                    />
                                ),
                            }}
                        />
                    ))}
                </Tabs.Navigator>
            )}
        </NavigationContainer>
    );
};

export const TadumContentContainer = (props) => {
    return (
        <Box
            flex={1}
            alignItems={"center"}
            justifyContent={"center"}
            bg={"white"}
            safeArea
        >
            {props.children ? props.children : <Heading>NO CONTENT</Heading>}
        </Box>
    );
};
