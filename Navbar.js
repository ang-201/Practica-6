import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Sidebar from "./sidebar";

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: "primary.main" }} position="static">
      <Toolbar>
        <Sidebar />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Monas Chinas
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

