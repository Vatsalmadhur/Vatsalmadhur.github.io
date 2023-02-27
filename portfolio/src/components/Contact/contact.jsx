import React, { useState } from "react";
import Navbar from '../Navbar/Navbar'
import {Drawer, IconButton, Typography} from '@mui/material'
import { Box } from "@mui/system";

function contact(){
const [isDrawerOpen,setIsDrawerOpen]=useState(false);
    return(
        <>
        {/* <IconButton size="large" edge='start' aria-label="logo" onClick={()=>setIsDrawerOpen(true)}>
            <MenuIcon/>
        </IconButton>
        <Drawer anchor="left" open={isDrawerOpen} onClose={()=> setIsDrawerOpen(flase)}>
            <Box width='250px' textAlign='center' >
                <Typography variant="h6" component="div">Side Pannel</Typography>
            </Box>

        </Drawer> */}
        <Navbar/>
        </>      
    )
}
export default contact;