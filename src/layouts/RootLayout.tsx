import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Grid, GridItem } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'

const RootLayout = () => {
    return (
        <div>
            <Grid templateColumns={'repeat(6, 1fr)'}>
                <GridItem 
                    as='aside' 
                    colSpan={{base:6, lg:2, xl:1}}
                    bg="teal" 
                    height={{ lg: "100vh"}} p={{base:'20px', lg:'30px'}}>
                    
                    <Sidebar/>
                </GridItem>
                <GridItem 
                    as={'main'}
                    colSpan={{base:6, lg:4, xl:5}}>
                    <Navbar />
                    <Outlet />
                </GridItem>

            </Grid>

        </div>
    )
}

export default RootLayout