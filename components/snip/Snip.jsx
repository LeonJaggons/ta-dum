
import { Ionicons } from '@expo/vector-icons'
import { Heading, Text, VStack, Box, Stagger, ScrollView, Image, Button, Divider, HStack, IconButton, Badge, Input } from 'native-base'
import React, { useState } from 'react'
import { AirbnbRating, Rating } from 'react-native-ratings'
import { TadumContentContainer } from '../../App'

const AllRecipesLogo = require("./allrecipes.png")
const YummlyLogo = require("./yummly.png")
const EpicuriousLogo = require("./epicurious.png")
const FoodNetworkLogo = require("./foodnetwork.png")
const Snip = () => {
    return (
        <TadumContentContainer>
            <VStack flex={1} pt={7} px={4} pb={3} space={3} w={"100%"}>
                <Heading color={"orange.600"} size={"2xl"} alignSelf={"center"}>
                    Find your Recipe
                </Heading>
                <Text textAlign={"center"} color={"muted.500"}>Creating your own recipe is easy! Pick from one of the most popular recipe sites to start.</Text>
                <Input mt={2} mb={2} InputLeftElement={
                    <Box ml={3}>
                        <Ionicons name={"ios-search"} size={16} color={"gray"} />
                    </Box>
                } />
                <SnipChoices />
            </VStack>
        </TadumContentContainer>
    )
}

const SnipChoices = () => {
    return (
        <ScrollView >
            <VStack w={"100%"} flex={1} space={5} alignItems={"center"}>
                <Stagger visible={true} initial={{
                    opacity: 0,
                    scale: 0,
                }} animate={{
                    translateY: 0,
                    scale: 1,
                    opacity: 1,
                    transition: {
                        type: "timing",
                        mass: 0.6,
                        stagger: {
                            offset: 40,
                            reverse: false
                        }
                    }
                }} exit={{
                    scale: 0.5,
                    opacity: 0,
                    transition: {
                        duration: 100,
                        stagger: {
                            offset: 30,
                            reverse: true
                        }
                    }
                }}>
                    <SnipChoice rating={3} title={"AllRecipes"} description={"With a crisp and easily navigable site and backing of skilled and experienced culinary masters, this platform furnishes its visitors with thousands of recipes and meal preparation videos."} logoSrc={AllRecipesLogo} />
                    <SnipChoice title={"Yummly"} description={"This platform boasts an appealing and easy to navigate interface, as well as plenty of filters to help you navigate easily in the database, which boasts over 2 million recipes. "} logoSrc={YummlyLogo} />
                    <SnipChoice title={"Food Network"} description={"The site boasts an outstanding database of recipes and videos, as well as clips and episodes of past televised Food Network shows."} logoSrc={FoodNetworkLogo} />
                    <SnipChoice title={"Epicurious"} description={"Unlike other recipe websites that brag of the number of visitors they have, this platform takes pride in the quality of recipes and food-related content it provides. Don’t expect to find millions of recipes on this site, but a handful of handpicked and trusted recipes. "} logoSrc={EpicuriousLogo} />
                </Stagger>
            </VStack>
        </ScrollView >
    )
}

const SnipChoice = ({ logoSrc, title, description, rating }) => {
    const [liked, setLiked] = useState(false)
    return (
        <VStack w={"100%"} mb={5}>
            <VStack flexShrink={1} p={5} pb={0} borderTopRadius={10} space={1} borderWidth={1} borderColor={"muted.200"} borderBottomWidth={0}>
                <HStack alignItems={"center"} >
                    <Heading size={"lg"} flex={1} color={"black"}>{title}</Heading>
                    <HStack alignItems={"center"}>
                        <IconButton colorScheme='muted'
                            onPress={() => setLiked(!liked)}
                            icon={
                                <Ionicons name={"ios-heart" + (liked ? "" : "-outline")} color={liked ? "red" : "#d3d3d3"} size={16} />
                            } />
                        <IconButton colorScheme='muted'
                            icon={
                                <Ionicons name={"ios-ellipsis-horizontal"} size={16} color={"#d3d3d3"} />
                            }
                        />
                    </HStack>
                </HStack>
                <HStack>
                    <Rating reviewColor={"white"} imageSize={18} readonly startingValue={rating ? rating : 5} />
                </HStack>
                <HStack my={2}>
                    <Text color={"muted.500"}>{description}</Text>
                </HStack>
            </VStack>
            <Box flex={1} w={"100%"} h={110} borderWidth={1} borderColor={"muted.200"} borderTopWidth={0} borderBottomRadius={10}>
                <Button w={"100%"} variant={"ghost"} h={"100%"} colorScheme={"amber"} borderBottomRadius={10} >
                    <Box w={"100%"} h={"100%"} alignSelf={"center"} display={"flex"} alignItems={"center"} justifyContent={"center"} px={10}>
                        <Image source={logoSrc} h={"70%"} w={null} resizeMethod={"scale"} resizeMode={"contain"} />
                    </Box>
                </Button>
            </Box>
        </VStack>

    )
}

export default Snip