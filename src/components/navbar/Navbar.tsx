import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import navbarStyles from "../../styles/navbarStyles/navbar.styles";
import SidebarData from "../sidebarDrawer/SidebarData";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar); // Toggle sidebar open/close
  };

  return (
    <div>
      <AppBar position="sticky" sx={navbarStyles.navbar}>
        <Toolbar sx={navbarStyles.toolbar}>
          {/* Left: Menu Button */}
          <IconButton sx={navbarStyles.iconButton} onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>

          {/* Center: Wirecutter Logo */}
          <Typography variant="h6" sx={navbarStyles.logo}>
            Wirecutter
          </Typography>

          {/* Right: Search & Account Icons */}
          <Box sx={navbarStyles.rightIcons}>
            <IconButton sx={navbarStyles.iconButton}>
              <SearchIcon />
            </IconButton>
            <IconButton sx={navbarStyles.iconButton}>
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={openSidebar} onClose={toggleSidebar}>
        <List sx={{ width: 250 }}>
          {SidebarData.map((item, index) => (
            <ListItem button key={index} onClick={toggleSidebar}>
              <Link to={item.path}>
                <ListItemText primary={item.name} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
