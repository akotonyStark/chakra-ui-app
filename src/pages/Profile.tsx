import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from "@chakra-ui/icons"
import { TabList, Tabs, Tab, TabPanel, TabPanels, Heading, List, ListItem, ListIcon } from "@chakra-ui/react"

const Profile = () => {
  return (
   <Tabs px={20} variant={'enclosed'}>
      <TabList >
          <Tab _selected={{color:'white', bg:'teal'}}>Account Iinfo</Tab>
          <Tab  _selected={{color:'white', bg:'teal'}}>Task History</Tab>
      </TabList>


      <TabPanels>
          <TabPanel>
            <Heading size={'sm'} mb={10}>Account Details</Heading>
            <List spacing={5}>
              <ListItem>
                  <ListIcon as={EmailIcon}/>alarbiampofo@gmail.com
              </ListItem>
              <ListItem>
                  <ListIcon as={ChatIcon}/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, expedita. Asperiores beatae saepe corporis, molestiae obcaecati repellendus neque nulla dicta, iusto assumenda tempore. Nesciunt ab impedit voluptatem velit vitae assumenda!
              </ListItem>
              <ListItem>
                  <ListIcon as={StarIcon}/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, expedita. Asperiores beatae saepe corporis, molestiae obcaecati repellendus neque nulla dicta, iusto assumenda tempore. Nesciunt ab impedit voluptatem velit vitae assumenda!
              </ListItem>
            </List>
          </TabPanel>

          <TabPanel>
            Tasks
            <List spacing={5}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color={'teal.400'} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eius assumenda qui culpa temporibus expedita velit nisi praesentium ipsa tempore, accusantium sequi doloremque tempora quibusdam quam aspernatur quidem magnam voluptas.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color={'teal.400'} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eius assumenda qui culpa temporibus expedita velit nisi praesentium ipsa tempore, accusantium sequi doloremque tempora quibusdam quam aspernatur quidem magnam voluptas.
                </ListItem>
                <ListItem>
                  <ListIcon as={WarningIcon} color={'red.400'} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eius assumenda qui culpa temporibus expedita velit nisi praesentium ipsa tempore, accusantium sequi doloremque tempora quibusdam quam aspernatur quidem magnam voluptas.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color={'teal.400'} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eius assumenda qui culpa temporibus expedita velit nisi praesentium ipsa tempore, accusantium sequi doloremque tempora quibusdam quam aspernatur quidem magnam voluptas.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color={'teal.400'} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eius assumenda qui culpa temporibus expedita velit nisi praesentium ipsa tempore, accusantium sequi doloremque tempora quibusdam quam aspernatur quidem magnam voluptas.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color={'teal.400'} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eius assumenda qui culpa temporibus expedita velit nisi praesentium ipsa tempore, accusantium sequi doloremque tempora quibusdam quam aspernatur quidem magnam voluptas.
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color={'teal.400'} /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eius assumenda qui culpa temporibus expedita velit nisi praesentium ipsa tempore, accusantium sequi doloremque tempora quibusdam quam aspernatur quidem magnam voluptas.
                </ListItem>


            </List>
          </TabPanel>
      </TabPanels>
   </Tabs>
  )
}

export default Profile