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
        // <Flex bg="gray.200" justify={'space-between'} wrap={'wrap'} gap={2}>
        //     <Box w={150} h={100} bg={'red'}></Box>
        //     <Box w={150} h={100} bg={'blue'}></Box>
        //     <Box w={150} h={100} bg={'green'}></Box>
        //     <Box w={150} h={100} bg={'yellow'}></Box>
        // </Flex>
    )
}

export default Navbar