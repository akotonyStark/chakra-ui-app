import { Box, SimpleGrid, Text } from "@chakra-ui/react"


const Dashboard = () => {
  return (
    <SimpleGrid p={5}  spacing={5} minChildWidth="200px">
    <Box bg="white" h={200} border="1px solid">
        <Text color={{base:'pink', md:'blue', lg:'green.900'}}>Hello</Text>
    </Box>
    <Box bg="white" h={200} border="1px solid"></Box>
    <Box bg="white" h={200} border="1px solid"></Box>
    <Box bg="white" h={200} border="1px solid"></Box>

    <Box bg="white" h={200} border="1px solid"></Box>
    <Box bg="white" h={200} border="1px solid"></Box>
    <Box bg="white" h={200} border="1px solid"></Box>
    <Box bg="white" h={200} border="1px solid"></Box>

    <Box bg="white" h={200} border="1px solid"></Box>
    <Box bg="white" h={200} border="1px solid"></Box>
    <Box bg="white" h={200} border="1px solid"></Box>
    <Box bg="white" h={200} border="1px solid"></Box>
</SimpleGrid>
  )
}

export default Dashboard