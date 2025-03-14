import {Box, Typography} from "@mui/material";
const Layout = ( {children}) => {

return(  
    
    
    
    <div>
        <Box>
            <container>
            
                {children}
            </container>

    
    
        </Box>
    
        <Box>

            <Typography variant="h4" component="h1"  sx={{mb:2}}> 
                Derechos reservados
            </Typography>
        </Box>
    
    </div>

)
};

export default Layout;
