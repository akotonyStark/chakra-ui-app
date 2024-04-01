import { AtSignIcon, CalendarIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons"
import { List, ListIcon, ListItem } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
    return (
        <List color={'white'} fontSize={{base:'0.8em', md:'1em', lg:'1.2em'}} spacing={5} >
            <ListItem>
                <ListIcon as={CalendarIcon} />
                <NavLink to={'/'}>Dashboard</NavLink>
            </ListItem>
            <ListItem>
                <ListIcon as={EditIcon} />
                <NavLink to={'/create'}>Create</NavLink>
            </ListItem>
            <ListItem>
                <ListIcon as={AtSignIcon} />
                <NavLink to={'/profile'}>Profile</NavLink>
            </ListItem>
            <ListItem>
                <ListIcon as={HamburgerIcon} />
                <NavLink to={'/practise'}>Practise</NavLink>
            </ListItem>
         
            
        </List>
    )
}

export default Sidebar