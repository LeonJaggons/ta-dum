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
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB337gZNRJJDdV1FDqlyjUg9Ay8aVxfejI",
	authDomain: "tadum-6ef5f.firebaseapp.com",
	projectId: "tadum-6ef5f",
	storageBucket: "tadum-6ef5f.appspot.com",
	messagingSenderId: "995389943708",
	appId: "1:995389943708:web:16db2f53b4613a70962259",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default function App() {
	return (
		<NativeBaseProvider>
			<Flex h={"100%"} safeArea>
				<Center flexGrow={1}>
					<Text>Open up App.js to start working on your app!</Text>
				</Center>
				<TaDumStatusBar />
			</Flex>
			<StatusBar style="auto" />
		</NativeBaseProvider>
	);
}

const TaDumStatusBarItem = (props) => {
	return (
		<VStack alignItems={"center"} justifyContent={"center"} flex={1}>
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
