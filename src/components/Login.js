import Head from "next/head";
import LogoLudiLove from "./icons/LogoLudiLove.svg"
import {Box, Button, Center, Stack} from "@chakra-ui/react"
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebaseconfig";

export default function Login() {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <>
        <Head>
            <title>Login</title> 
        </Head>
        <Center
        h = "100vh">
            <Stack
            align = "center"
            bgColor = "purple.100"
            p = "35"
            rounded = "3xl"
            spacing = "12"
            boxShadow = "lg"
            >
                <Box
                bgColor = "pink.100"
                w = "50vh"
                h = "50vh"
                display = "flex"
                justifyContent = "center"
                alignItems = "center"
                rounded = "3xl"
                p = "10"
                boxShadow = "md"
                >
                    <LogoLudiLove />
                </Box>

                <Button
                boxShadows = "md"
                onClick = {() => signInWithGoogle("", {prompt: "select_account"})}
                >
                    Se connecter avec Google
                </Button>
            </Stack>
        </Center>

        </>
        )}