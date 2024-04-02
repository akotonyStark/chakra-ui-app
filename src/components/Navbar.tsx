import { UnlockIcon } from "@chakra-ui/icons"
import { Box, Text, Button, Flex, Heading, Spacer, HStack, useToast } from "@chakra-ui/react"

const Navbar = () => {
    const toast = useToast()

    const handleLogout = () => {
        toast({
            title:'Logging out',
            description: 'Successfully logged out',
            duration: 3000,
            isClosable: true,
            status: 'success',
            position:'top-right',
            icon: <UnlockIcon/>
        })
    }
    return (
        <Flex as={"nav"} p={10} alignItems={'center'} gap={5}>
            <Heading>Task Manager</Heading>
            <Spacer />

            <HStack spacing={'20px'}>
                <Box bg={'gray.200'} p={5} w="50px" height="50px" borderRadius={"50%"} backgroundImage={'../img/mario.png'} bgSize={'contain'}></Box>
                <Text>user@gmail.com</Text>
                <Button colorScheme='teal' onClick={handleLogout}>Logout</Button>
            </HStack>

        </Flex>
 
    )
}

export default Navbar