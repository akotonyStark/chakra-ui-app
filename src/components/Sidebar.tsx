import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons"
import { List, ListIcon, ListItem } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const Sidebar = () => {
    return (
        <List color={'white'} fontSize={'1.2em'} spacing={5}>
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
                <NavLink to={'/practise'}>Practise</NavLink>
            </ListItem>
            <ListItem>
                <NavLink to={'/grid-layout'}>Grid Layout</NavLink>
            </ListItem>
            
        </List>
    )
}

export default Sidebar