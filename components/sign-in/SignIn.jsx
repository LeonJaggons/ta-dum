import {
  HStack,
  VStack,
  Text,
  Box,
  Input,
  Icon,
  Button,
  Divider,
} from "native-base";
import React from "react";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const SignIn = (props) => {
  return (
    <Box display="flex" flexGrow={1} width="100%" alignItems="center">
      <Box
        bg="primary.200"
        display="flex"
        flexGrow={1}
        width="100%"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <HStack>
          <Text color="white" italic fontSize="2xl">
            TA-
          </Text>
          <Text bold fontSize="6xl" color="white">
            DUM
          </Text>
        </HStack>
      </Box>
      <Box display="flex" flexShrink={1} flexDirection="column">
        <VStack space={3} mt={5} mb={5} alignItems="center">
          <Text color="muted.400">Sign In</Text>
          <Input
            variant="rounded"
            placeholder="User name or e-mail"
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name={"user-alt"} />}
                size={4}
                ml="2"
                color="muted.400"
              />
            }
          />
          <Input
            variant="rounded"
            type="password"
            placeholder="Password"
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name={"key"} />}
                size={4}
                ml="2"
                color="muted.400"
              />
            }
            InputRightElement={
              <Icon
                as={<MaterialIcons name={"visibility-off"} />}
                size={5}
                mr="2"
                color="muted.400"
              />
            }
          />
          <Button style={{ borderRadius: 20, width: "100%" }} size="sm">
            Sign In
          </Button>
          <Divider w="100%" mb={3} mt={3} />
          <Button
            style={{ borderRadius: 20, width: "100%" }}
            size="sm"
            leftIcon={<Icon as={FontAwesome} name="google" size={4} />}
          >
            Sign In with Google
          </Button>
          <Button size="sm" variant="ghost" style={{ borderRadius: 20 }}>
            Don't have an account? Create an account here.
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default SignIn;
