import {Button, Flex, Avatar, Text} from "@chakra-ui/react";
import {IconButton} from "@chakra-ui/button";

import { ArrowLeftIcon } from "@chakra-ui/icons";
import {signOut} from "firebase/auth";
import {auth} from "../firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebaseconfig";
import getOtherEmails from "../utils/getOtherEmails";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";





export default function Sidebar() {
    const [user] = useAuthState(auth)
    const [chattersSnapshot] = useCollection(collection(db, "ludilove_chats"))
    const chatters = chattersSnapshot?.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    const router = useRouter();

    const redirect = (id) => {
        router.push(`/chat/${id}`)}
    const ChattersList = () => {
    return (
        chatters?.filter((chatter) => chatter.users.includes(user.email)).map((chatter) => (
        <Flex
        key = {Math.random()}
        align = "center"
        p = "3"	
        _hover = {{bg: "gray.100", cursor: "pointer"}}
        onClick = {() => redirect(chatter.id)}>
            <Avatar src = ""
            marginEnd = {3}/>
            <Text>
                {getOtherEmails(chatter.users, user)}
            </Text>
        </Flex>
        )))}

    return (
        <Flex
        // bgColor = "purple.100"
        w = "35vh"
        h = "100vh"
        borderEnd = "1px"
        borderColor = "gray.200"
        direction = "column"
        >
            <Flex
            // bgColor = "pink.100"
            w = "100%"
            h = "10%"
            align = "center" justifyContent = "space-between"
            p = "3"
            borderBottom = "1px"
            borderColor = "gray.200"
            >
                <Flex
                align = "center">
                    <Avatar
                    src = {user.photoURL}
                    margin = "3"
                    />
                    <Text>{user.displayName}</Text>
                </Flex>
                
                <IconButton
                size = "sm"
                onClick = {() => signOut(auth)}
                isRound icon = { <ArrowLeftIcon /> }
                />
            </Flex>

            <Button
            m = {5}
            p = {4}
            >
                <Text
                fontSize = "2.2vh">
                    Trouver des LudiLovers
                </Text>
            </Button>
        
        <Flex
        overflowY = "scroll" 
        direction = "column"
        sx = {{scrollbarWidth:"None"}}>
            <ChattersList />
        </Flex>
    



        </Flex>


    );
}