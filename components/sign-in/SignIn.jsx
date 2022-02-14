import { Ionicons } from "@expo/vector-icons";
import { Box, Button, Heading, Text, Input, Image, VStack } from "native-base";
import React from "react";
import { TadumContentContainer } from "../../App";
const SignInImage = require('./signInCover.jpg')

const SignIn = (props) => {
	return (
		<TadumContentContainer>
			<VStack w={"100%"} space={3} safeAreaTop>
				<SignInCover />
				<VStack px={7} space={3}>

					<SignInForm />
					<SignInButton />
					<SignUpButton />
				</VStack>
			</VStack>
		</TadumContentContainer>
	)
};

const SignInCover = () => {
	return (
		<Image source={SignInImage} alt={"Image"} w={null} h={260} resizeMode={"contain"} resizeMethod={"scale"} />

	)
}

const SignInForm = () => {
	return (
		<VStack space={3} >
			<Heading alignSelf={"center"} size={"xl"} mb={2}>Sign In</Heading>
			<Input placeholder={"Username/Email"} size={"md"} variant={"rounded"} isFullWidth InputLeftElement={
				<Box ml={4} mr={1}>
					<Ionicons name={"ios-person"} color={"#F2B33D"} />
				</Box>
			} />
			<Input placeholder={"Password"} size={"md"} variant={"rounded"} isFullWidth InputLeftElement={
				<Box ml={4} mr={1}>
					<Ionicons name={"ios-key"} color={"#F2B33D"} />
				</Box>
			} InputRightElement={
				<Box mr={4}>
					<Ionicons name={"ios-eye"} color={"gray"} />
				</Box>

			} />
		</VStack>
	)
}

const SignInButton = () => {
	return (
		<Button bg={"#F2B33D"} colorScheme={"yellow"} mt={5}>
			<Text color={"white"} bold>
				Continue
			</Text>
		</Button>
	)
}

const SignUpButton = () => {
	return (
		<Button variant={"ghost"} colorScheme={"muted"}>
			<Text color={"#F2B33D"} >
				Don't have an account? Create one now!
			</Text>
		</Button>
	)
}

export default SignIn;
