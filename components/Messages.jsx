import { Ionicons } from '@expo/vector-icons'
import { Box, Heading, HStack, VStack, Input, Avatar, Text, Button, Divider, Stagger, ScrollView } from 'native-base'
import React from 'react'

const Messages = () => {
    return (
        <Box flex={1} bg={"white"} pt={4} w={"100%"} safeAreaTop>
            <Heading alignSelf={"center"} size={"xl"} mb={4}>Messages</Heading>
            <Inbox />
        </Box>
    )
}

const Inbox = () => {
    return (
        <VStack w={"100%"} px={4} space={2}>
            <InboxSearch />
            <ScrollView space={8} mt={2}>
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
                    <RecievedMessage senderMessage={"Eaque nisi illo nesciunt ."} senderName={"Travis Torp"} />
                    <RecievedMessage senderMessage={"Eaque nisi illo nesciunt ."} senderName={"Mr. Archie Klein"} />
                    <RecievedMessage senderMessage={"Eaque nisi illo nesciunt ."} senderName={"Lynn Auer"} />
                    <RecievedMessage senderMessage={"Eaque nisi illo nesciunt ."} senderName={"Phil Wisozk V"} />
                </Stagger>
            </ScrollView >
        </VStack>
    )
}

const InboxSearch = () => {
    return (
        <Input placeholder={"Search messages..."} mb={3} pl={5} variant={
            "rounded"
        } />
    )
}

const RecievedMessage = ({ senderName, senderMessage }) => {
    return (
        <HStack w={"100%"} alignItems={"center"} space={4} borderRadius={8} mb={6}>
            <Avatar bg={"amber.400"} size={53} shadow={2}>
                <Ionicons name={"ios-person"} color={"white"} size={18} />
            </Avatar>
            <VStack space={2} flex={1}>
                <HStack alignItems={"center"}>
                    <Heading size={"sm"} flex={1}>{senderName}</Heading>
                    <Text color={"muted.300"}>{Math.floor(Math.random() * 30)} min ago.</Text>
                </HStack>
                <HStack w={"100%"}>
                    <Text ellipsizeMode={"tail"} color={"muted.600"} >{senderMessage}</Text>
                </HStack>
            </VStack>
        </HStack>
    )
}

export default Messages