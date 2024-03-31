import { Box, SimpleGrid } from "@chakra-ui/react"


const GridLayout = () => {
  return (
    <SimpleGrid p={5}  spacing={5} minChildWidth="200px">
        <Box bg="white" h={100} border="1px solid"></Box>
        <Box bg="white" h={100} border="1px solid"></Box>
        <Box bg="white" h={100} border="1px solid"></Box>
        <Box bg="white" h={100} border="1px solid"></Box>

        <Box bg="white" h={100} border="1px solid"></Box>
        <Box bg="white" h={100} border="1px solid"></Box>
        <Box bg="white" h={100} border="1px solid"></Box>
        <Box bg="white" h={100} border="1px solid"></Box>

        <Box bg="white" h={100} border="1px solid"></Box>
        <Box bg="white" h={100} border="1px solid"></Box>
        <Box bg="white" h={100} border="1px solid"></Box>
        <Box bg="white" h={100} border="1px solid"></Box>
    </SimpleGrid>
  )
}

export default GridLayout