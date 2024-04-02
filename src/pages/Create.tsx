import { Box, Button, Checkbox, Flex, FormControl, FormHelperText, FormLabel, HStack, Input, Select, Stack, Textarea } from "@chakra-ui/react"
import { Form } from "react-router-dom"

const Create = () => {
  return (
    <Box maxWidth={600} px={20}>
      <Form>
        <FormControl isRequired mb={10}>
          <FormLabel>Task Name:</FormLabel>
          <Input type="text" name="nameOfTask" />
          <FormHelperText>Enter descriptive task title</FormHelperText>
        </FormControl>

        <FormControl isRequired mb={10}>
          <FormLabel>Task Name:</FormLabel>
          <Textarea placeholder="Enter a detailed description for your task" name="description" />
        </FormControl>

        <FormControl isRequired mb={10}>
          <FormLabel>Completion Date:</FormLabel>
          <Input type="date" name="completionDate" />
        </FormControl>

        <Flex justifyContent={'space-between'}>
          <HStack width={'100%'}>
            <FormControl isRequired mb={10}>
              <FormLabel>Type:</FormLabel>
              <Stack spacing={3}>

                <Select variant='filled' placeholder='Select Type'>
                  <option>Weddiing</option>
                  <option>Engagement</option>
                </Select>

              </Stack>
            </FormControl>

            <FormControl isRequired mb={10}>
              <FormLabel>Category:</FormLabel>
              <Select variant='filled' placeholder='Select Category'>
                <option>Photography</option>
                <option>Decorations</option>
                <option>Catering</option>
                <option>Videography</option>
              </Select>
            </FormControl>
          </HStack>

        </Flex>

        <FormControl mb={10} display={'flex'} alignItems={'center'}>
          <Checkbox name="isPriority" size={'lg'} />
          <FormLabel mb={0} ml={5}>Make this priority </FormLabel>
        </FormControl>


        <Button type="submit" colorScheme="teal">Submit</Button>

      </Form>
    </Box>
  )
}


export default Create