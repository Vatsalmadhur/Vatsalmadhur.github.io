import "./Navbar.css";
import React, { useState } from "react";
import { Drawer, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {
    const [isDrawerOpen,setIsDrawerOpen]=useState(false);
  return (
    <>

        <IconButton
          size="large"
          aria-label="logo"
          color="pink"
          onClick={() => setIsDrawerOpen(true)}
          sx={{position:'absolute',top:'0',right:'0'}}
        >
          <MenuIcon fontSize="large" color="primary" />
        </IconButton>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          color='primary'
        >
          <Box width="250px" textAlign="center">
            <Typography variant="h6" component="div">
              Side Pannel
            </Typography>
          </Box>
        </Drawer>
      </>


)}
export default Navbar;
