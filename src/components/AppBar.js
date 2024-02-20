import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Config from "../config";
import useAuth from "../hooks/useAuth";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { UserOutlined } from "@ant-design/icons";

const NavBar = () => {
  const { colorConfig } = Config;
  const { currentUser, signout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSignOut = () => {
    signout();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: colorConfig.secondryColor,
          boxShadow: "2px",
          width: "100%",
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SuperNet
          </Typography>
          <Button
            component={Link}
            to={"/home"}
            sx={{ color: "white", textTransform: "none" }}
          >
            Features
          </Button>
          <Button
            component={Link}
            to={"/contact"}
            sx={{ color: "white", textTransform: "none" }}
          >
            Edge Network
          </Button>
          <Button
            component={Link}
            to={"/contact"}
            sx={{ color: "white", textTransform: "none" }}
          >
            Pricing
          </Button>
          {currentUser ? (
            <div>
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{
                  borderRadius: "50%",
                  backgroundColor: "green",
                  "&:hover": {
                    backgroundColor: "green",
                  },
                }}
              >
                <UserOutlined></UserOutlined>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>{currentUser.email}</MenuItem>
                <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
              </Menu>
            </div>
          ) : (
            <Button
              component={Link}
              to={"/sign-up"}
              variant="success"
              sx={{
                color: "white",
                textTransform: "none",
                backgroundColor: "green",
              }}
            >
              Sign Up
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
