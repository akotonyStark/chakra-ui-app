import { Box, Container, Heading, Text } from "@chakra-ui/react"

const Typography = () => {

    const boxStyles = {
        bgColor: 'gold',
        padding: 10,
        margin: 10,
        filter: 'blur(2px)',
        ':hover': {
            bgColor: 'purple',
            color: 'white',
            cursor:'pointer'
        }
    }
  return (
    <Container as={'section'}>
        <Heading my={30}>Chakra UI App</Heading>
        <Text  px={10}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum temporibus id autem aut numquam facilis suscipit deleniti inventore, dignissimos, reiciendis illo repellendus asperiores rerum quis libero iste architecto, voluptates molestias!</Text>
        <Text color="blue.300" my={5}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo dolorum voluptatem quos, vitae nostrum illo sapiente commodi animi rerum molestias illum odit, voluptate repellat tenetur modi quam id enim tempora.</Text>
    
        <Box bgColor={'orange'} p={20} my={20}>
            <Text>This is a box</Text>
        </Box>

        <Box sx={boxStyles}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur, impedit dolores ea ipsam aut amet laudantium explicabo qui dolorum libero modi iste delectus, molestiae perspiciatis vitae tempora, facilis fugit!
        </Box>
    </Container>
  )
}

export default Typography