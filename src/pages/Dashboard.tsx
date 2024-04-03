import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, HStack, SimpleGrid } from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"
import { Task } from "../types/Task.type"
import { EditIcon, ViewIcon } from "@chakra-ui/icons"
import mario from "../../src/assets/img/mario.png"
import yoshi from "../../src/assets/img/yoshi.png"
import luigi from "../../src/assets/img/luigi.png"
import peach from "../../src/assets/img/peach.png"



export const tasksLoader = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

const images = [mario, yoshi, luigi, peach]
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
                  <Avatar src={images[Math.floor(Math.random()*4)]}/>
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