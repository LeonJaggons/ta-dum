import {
  Box,
  VStack,
  Input,
  Icon,
  HStack,
  Button,
  Text,
  Image,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView } from "react-native";
import { Rating } from "react-native-ratings";
const foodRecommended = require("./foodRecommended.png");

const Home = () => {
  return (
    <Box flex={1} px="5%" py="5%" flexDirection="column">
      <HStack>
        <SearchBar />
        <SearchFilter />
       
      </HStack>
      <ScrollView>
        <RecommendedSection />
        <RecentSection/>
        </ScrollView>
    </Box>
  );
};

const SearchBar = () => {
  return (
    <Input
      flexGrow={1}
      placeholder="Recipes or Cooks"
      borderRadius="4"
      py="1"
      px="1"
      mr="3"
      fontSize="14"
      InputLeftElement={
        <Icon
          m="2"
          ml="3"
          size="6"
          color="gray.400"
          as={<MaterialIcons name="search" />}
        />
      }
      InputRightElement={
        <Icon
          m="2"
          mr="3"
          size="6"
          color="gray.400"
          as={<MaterialIcons name="mic" />}
        />
      }
      isFullWidth
    />
  );
};

const SearchFilter = () => {
  return (
    <Button
      leftIcon={<Icon as={MaterialIcons} name="filter-list" size="sm" />}
    ></Button>
  );
};

const RecommendedSection = () => {
  return (
    <VStack flexGrow={1} my="6">
      <Text bold mb="2" fontSize="md">
        Recommended
      </Text>
      <ScrollView  horizontal={true}>
          <HStack bg="muted.100" p="4">
      <RecommendedItem />
      <RecommendedItem />
      </HStack>
      </ScrollView>
    </VStack>
  );
};

const RecentSection = () => {
    return(
        <VStack flexShrink={1} my="6">
       <Text bold mb="2" fontSize="md">
       Recent Recipes
      </Text>
      <VStack bg="muted.100">
      <RecentItem />
      <RecentItem />
      </VStack>
        </VStack>

    )
}

const RecentItem = () => {
    return(
        <HStack
        space={4}
        pt="4"
        pb="4"
        mr="6"
       flexShrink={1}
        bg="white"
        width="100%"
        borderWidth={1}
        borderRightColor="white"
        borderLeftColor="white"
        borderBottomColor="muted.200"
        borderTopColor="muted.200"
  
      >
        <Box borderTopRadius={20} height={100} width="40%">
          <Image resizeMode="cover" height="100%" source={foodRecommended} />
        </Box>
        <VStack >
        <Text px="4" color="muted.500" bold fontSize="xl">
          Recipe Name
        </Text>
        <Text fontSize="xs" pl="4" color="grey">
              Nhan Bui
            </Text>
        <RecommendedRating />
        <HStack>
          <HStack pl="4">
            <MaterialIcons name="access-time" size={14} color="grey"/>
            <Text fontSize="xs" pl="2" pr="4" color="grey">
              20 mins
            </Text>
          </HStack>
          <HStack >
            <MaterialIcons name="pie-chart-outlined" size={14} color="grey" />
            <Text fontSize="xs" pl="2" color="grey">
              12 serving
            </Text>
            
          </HStack>
          </HStack>
        </VStack>
      </HStack>
    )
}

const RecommendedItem = () => {
  return (
    <VStack
    
      pt="4"
      pb="4"
      mr="6"
     flexShrink={1}
      bg="white"
      width={200}
      borderRadius={20}

    >
      <Box borderTopRadius={20} height={200} width="100%">
        <Image resizeMode="cover" height="100%" source={foodRecommended} />
      </Box>
      <Text px="4" color="muted.500" bold fontSize="xl">
        Recipe Name
      </Text>
      <Text fontSize="xs" pl="4" color="grey">
            Nhan Bui
          </Text>

      <RecommendedRating />

      <HStack px="4">
        <HStack>
          <MaterialIcons name="access-time" size={14} color="grey"/>
          <Text fontSize="xs" pl="2" pr="4" color="grey">
            20 mins
          </Text>
        </HStack>
        <HStack>
          <MaterialIcons name="pie-chart-outlined" size={14} color="grey" />
          <Text fontSize="xs" pl="2" color="grey">
            12 serving
          </Text>
        </HStack>
      </HStack>
    </VStack>
  );
};

const RecommendedRating = () => {
  return (
    <Box w="100%" alignItems="flex-start" pl="3" pb="2">
      <Rating type="star" ratingCount={5} imageSize={15} style={{fontSize: 5}}
      showRating/>
    </Box>
  );
};

export default Home;
