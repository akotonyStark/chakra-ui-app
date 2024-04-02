import { Box, Text, Button, Flex, Heading, Spacer, HStack } from "@chakra-ui/react"

const Navbar = () => {
    return (
        <Flex as={"nav"} p={10} alignItems={'center'} gap={5}>
            <Heading>Task Manager</Heading>
            <Spacer />

            <HStack spacing={'20px'}>
                <Box bg={'gray.200'} p={5} w="50px" height="50px" borderRadius={"50%"} backgroundImage={'../img/mario.png'} bgSize={'contain'}></Box>
                <Text>user@gmail.com</Text>
                <Button colorScheme='teal'>Logout</Button>
            </HStack>

        </Flex>
 
    )
}

export default Navbar