import { UnlockIcon } from "@chakra-ui/icons"
import { Box, Text, Button, Flex, Heading, Spacer, HStack, useToast, Avatar, AvatarBadge } from "@chakra-ui/react"
import mario from "../../src/assets/img/mario.png"
const Navbar = () => {
    const toast = useToast()

    const handleLogout = () => {
        toast({
            title: 'Logging out',
            description: 'Successfully logged out',
            duration: 3000,
            isClosable: true,
            status: 'success',
            position: 'top-right',
            icon: <UnlockIcon />
        })
    }
    return (
        <Flex as={"nav"} p={10} alignItems={'center'} gap={5}>
            <Heading>Task Manager</Heading>
            <Spacer />

            <HStack spacing={'20px'}>

                <Avatar src={mario} bg={'gold'} name="Mario">
                    <AvatarBadge width="1.3em" bg={'teal.500'}><Text fontSize={'small'} color={'white'}>4</Text></AvatarBadge>
                </Avatar>
                <Text>user@gmail.com</Text>
                <Button colorScheme='teal' onClick={handleLogout}>Logout</Button>
            </HStack>

        </Flex>

    )
}

export default Navbar