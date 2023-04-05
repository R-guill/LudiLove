import Sidebar from '../../components/Sidebar'
import { Flex, Avatar, Heading, Input, FormControl, Button, Text } from '@chakra-ui/react'



const Topbar = () => {
    return (
        <Flex
        bg = "gray.100"
        h = "10%"
        w = "100%"
        align = "center"
        p = {5}>
            <Avatar src = "" marginEnd = {5}/>
            <Heading 
            size = "md">
                User Name 2
            </Heading>
        </Flex>)}

const Bottombar = () => {
    return(
        <FormControl
        p = {3}>
            <Input placeholder = "Tapez un message..."/>
            <Button type = "submit" hidden>
                Envoyer
            </Button>
        </FormControl>
    )
}


export default function Chat(){
    return (
        <Flex
        h = "100vh">
            <Sidebar />
            <Flex
            flex = "1"
            direction = "column">
                <Topbar/>
                <Flex flex = {1} direction = "column"
                 pt = {4} mx = {3} overflowX = "scroll" 
                 sx = {{scrollbarWidth: "none"}} >
                    <Flex 
                    bg = "blue.100" 
                    w = "fit-content"
                    minWidth = '100px'
                    borderRadius = "lg"
                    p = {3}
                    m = {1}
                    >
                        <Text>
                            This is a dummy message
                        </Text>
                    </Flex>

                    <Flex 
                    bg = "purple.100" 
                    w = "fit-content"
                    minWidth = '100px'
                    borderRadius = "lg"
                    p = {3}
                    m = {1}
                    alignSelf = "flex-end"
                    >
                        <Text>
                            This is a dummy response message
                        </Text>
                    </Flex>

                </Flex>
                <Bottombar/>

            </Flex>


        </Flex>)
}