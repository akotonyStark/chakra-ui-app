import { Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, HStack, IconButton, SimpleGrid, Text } from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"
import { Task } from "../types/Task.type"
import { EditIcon, ViewIcon } from "@chakra-ui/icons"



export const tasksLoader = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

const Dashboard = () => {
  const tasks: any = useLoaderData()

  return (
    <SimpleGrid p={10} spacing={10} minChildWidth="400px" h={'100vh'} minH={'95vh'} overflow={'auto'}>
      {tasks && tasks?.map((task: Task) => {
        return (
          <Card key={task.id} bg="white" h={320} borderTop="8px" borderColor={'teal'}>

            <CardHeader>
              <Flex alignItems={'center'} gap={5} >
                <HStack>
                  <Box w={50} h={50}>
                    <Text>Av</Text>
                  </Box>
                  <Box>
                    <Heading size={'md'}>{task.title.substring(0, 5)}</Heading>
                  </Box>
                </HStack>
              </Flex>

            </CardHeader>
            <CardBody color={'teal'}>{task.body}</CardBody>
            <Divider borderColor={'gray.200'}/>
            <CardFooter>
              <HStack>
                <Button size={'sm'} variant="ghost" leftIcon={<ViewIcon/>}>Like</Button>
                <Button size={'sm'} leftIcon={<EditIcon/>}>Comment</Button>
              </HStack>
            </CardFooter>
          </Card>)
      })}


    </SimpleGrid>
  )
}

export default Dashboard