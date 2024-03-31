import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Grid, GridItem } from '@chakra-ui/react'

const RootLayout = () => {
    return (
        <div>
            <Grid templateColumns={'repeat(6, 1fr)'}>
                <GridItem as='aside' colSpan={1} bg="teal" height="100vh" p={20}>
                    <span>Sidebar</span>
                </GridItem>
                <GridItem colSpan={5}>
                    <Navbar />
                    <Outlet />
                </GridItem>

            </Grid>

        </div>
    )
}

export default RootLayout