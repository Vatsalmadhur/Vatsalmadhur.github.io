import "./Navbar.css";
import React, { useRef, useState } from "react";
import { Drawer, IconButton, List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
function Navbar() {
  const Navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 0,
        xs: 300,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536
      }
    }
  });

  return (
    <>
     <ThemeProvider theme={theme}>
      <IconButton
        size="large"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
        sx={{ position: "absolute", top: "0", right: "0", zIndex: "3" }}
      >
        <MenuIcon fontSize="large" sx={{ color: "#ff6f1d" }} />
      </IconButton>
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <List sx={{ bgcolor: "#21282a", color: "#ffffff" }}>
          <Box className="navBox"
            sx={{
              display: "flex",
              alignItems:"center",
              justifyContent: "space-around",
              flexWrap: "wrap",
              flexDirection:{
                xs: "column",
                sm: "row",
                md: "row",
                lg: "row",
                xl: "row"
              },
              height:{
                xs:300,
                sm:50,
                md:50,
                lg:50,
                xl:50
              }
            }}
          >
            <ListItem
              onClick={() => {
                Navigate("/");
              }}
              sx={{ width: "100px",'&:hover':{cursor:"pointer"} }}
            >
              <HomeIcon sx={{ color: "#ff6f1d" }} />
              <Typography ml={1}   >Home</Typography>
            </ListItem>

            <ListItem
              onClick={() => {
                Navigate("/about");
              }}
              sx={{ width: "100px",'&:hover':{cursor:"pointer"} }}
            >
              <AccountBoxIcon sx={{ color: "#ff6f1d" }} />
              <Typography ml={1}>About</Typography>
            </ListItem>
            <ListItem
              onClick={() => {
                Navigate("/skills");
              }}
              sx={{ width: "100px",'&:hover':{cursor:"pointer"} }}
            >
              <CodeIcon sx={{ color: "#ff6f1d" }} />
              <Typography ml={1}>Skills</Typography>{" "}
            </ListItem>
            <ListItem
              onClick={() => {
                Navigate("/project");
              }}
              sx={{ width: "100px",'&:hover':{cursor:"pointer"} }}
            >
              <DataObjectIcon sx={{ color: "#ff6f1d" }} />
              <Typography ml={1}>Projects</Typography>
            </ListItem>
            <ListItem
              onClick={() => {
                Navigate("/contact");
              }}
              sx={{ width: "100px",'&:hover':{cursor:"pointer"} }}
            >
              <ContactMailIcon sx={{ color: "#ff6f1d" }} />
              <Typography ml={1}>Contact</Typography>
            </ListItem>
          </Box>
        </List>
      </Drawer>
      </ThemeProvider>
    </>
  );
}
export default Navbar;
