import { Box, SimpleGrid } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Practise = () => {
    const boxStyles = {
        ':hover': {
            bgColor: 'teal',
            color: 'white',
            cursor:'pointer',
            border: 'none',
        }
    }
    return (
        <SimpleGrid columns={4} spacing={5} mx={5}>
            <Link to={'/grid-layout'}>
                <Box bg="white" h={100} border="1px solid" sx={boxStyles}>
                    GridLayout
                </Box>
            </Link>
            <Link to={'/typography'}>
                <Box bg="white" h={100} border="1px solid" sx={boxStyles}>Typography</Box>
            </Link>
            <Box bg="white" h={100} border="1px solid" sx={boxStyles}></Box>
            <Box bg="white" h={100} border="1px solid" sx={boxStyles}></Box>

            <Box bg="white" h={100} border="1px solid" sx={boxStyles}></Box>
            <Box bg="white" h={100} border="1px solid" sx={boxStyles}></Box>
            <Box bg="white" h={100} border="1px solid" sx={boxStyles}></Box>
            <Box bg="white" h={100} border="1px solid" sx={boxStyles}></Box>

            <Box bg="white" h={100} border="1px solid"></Box>
            <Box bg="white" h={100} border="1px solid"></Box>
            <Box bg="white" h={100} border="1px solid"></Box>
            <Box bg="white" h={100} border="1px solid"></Box>
        </SimpleGrid>
    )
}

export default Practise