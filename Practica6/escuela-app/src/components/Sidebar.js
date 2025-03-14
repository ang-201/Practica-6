import {Drawer, IconButton, Link, List, ListItem, ListItemText, toggleButtonClasses} from "@mui/material"
import { use, useState } from "react";

let drawerOpen, setDrawerOpen;

[drawerOpen, setDrawerOpen] = useState(false);

function MenuIcon(){
    return null;
}

const Sidebar = () => {
    
    function toggleDrawer(){
        return undefined;
    }
    
    return(
        <IconButton edge= "start" onClick={toggleDrawer(true)}>
            <MenuIcon/>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>

            </Drawer>

            <Box classname="sidebar">
                <List>
                    <ListItem button component={Link} to="/">
            
                        <ListItemText primary="inicio"/>
                     </ListItem>
                
                    
                </List>

            </Box>


        </IconButton>
        

    
        
    )
};

const toggleDrawer=(open) => (event)=>{
    if (event.type === "keydown" && (event.key ==="Tab" || event.key === "Shift")){
        return;
    }
    setDrawerOpen(open);
};


export default Sidebar;