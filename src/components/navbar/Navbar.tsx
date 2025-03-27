import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import navbarStyles  from "../../styles/navbarStyles/navbar.styles";

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={navbarStyles.navbar}>
      <Toolbar sx={navbarStyles.toolbar}>
        {/* Left: Menu Button */}
        <IconButton sx={navbarStyles.iconButton}>
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
  );
};

export default Navbar;
