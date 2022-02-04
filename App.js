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

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getRedirectResult } from "firebase/auth";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
export default function App() {
	useEffect(() => {
		getRedirectResult(auth)
			.then((gUser) => {
				if (gUser == null) signInWithGoogle();
				else {
					const firebaseID = gUser.user.uid;
					isTaDumUser(firebaseID).then((res) => {
						if (!res) {
							createTaDumUserFromGoogle(gUser.user);
						}
					});
				}
			})
			.catch((err) => {
				console.log(err);
				signInWithGoogle();
			});
	}, []);

	return (
		<Provider store={store}>
			<NativeBaseProvider>
				<Flex h={"100%"} safeArea>
					<Center flexGrow={1}>
						<AppContent />
					</Center>
					<TaDumStatusBar />
				</Flex>
				<StatusBar style="auto" />
			</NativeBaseProvider>
		</Provider>
	);
}

const AppContent = () => {
	const appState = useSelector((state) => state.app.appState);
	useEffect(() => {
		console.log(appState);
	}, [appState]);

	return <Text>{appState}</Text>;
};

const TestRedux = () => {
	const appTitle = useSelector((state) => state.app.appTitle);

	useEffect(() => {
		console.log(appTitle);
	}, [appTitle]);

	return (
		<Box>
			<Text>Hello</Text>
		</Box>
	);
};

const TaDumStatusBarItem = (props) => {
	const dispatch = useDispatch();
	const appState = useSelector((state) => state.app.appState);
	const handlePress = () => {
		dispatch({
			type: "SET",
			attrName: "appState",
			payload: props.title.toUpperCase(),
		});
	};

	return (
		<VStack
			alignItems={"center"}
			justifyContent={"center"}
			flex={1}
			onStartShouldSetResponder={() => handlePress()}
		>
			<Ionicons name={"ios-" + props.icon + ""} size={17} />
			<Text mt={1} fontSize={12}>
				{props.title}
			</Text>
		</VStack>
	);
};
const TaDumStatusBar = () => {
	return (
		<HStack
			space={5}
			flexShrink={1}
			justifyContent={"center"}
			alignItems={"center"}
			py={3}
			px={5}
		>
			<TaDumStatusBarItem title={"Home"} icon={"home"} />
			<TaDumStatusBarItem title={"Ingredients"} icon={"cart"} />
			<TaDumStatusBarItem title={"Tasks"} icon={"create"} />
			<TaDumStatusBarItem title={"Message"} icon={"chatbox"} />
			<TaDumStatusBarItem title={"Members"} icon={"people"} />
		</HStack>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
