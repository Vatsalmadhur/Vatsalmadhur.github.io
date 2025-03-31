import "./Navbar.css";
import React, { useState } from "react";
import { Drawer, IconButton, List, ListItem, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const navItems = [
  { path: "/", label: "Home", icon: <HomeIcon sx={{ color: "#ff6f1d" }} /> },
  { path: "/about", label: "About", icon: <AccountBoxIcon sx={{ color: "#ff6f1d" }} /> },
  { path: "/skills", label: "Skills", icon: <CodeIcon sx={{ color: "#ff6f1d" }} /> },
  { path: "/project", label: "Projects", icon: <DataObjectIcon sx={{ color: "#ff6f1d" }} /> },
  { path: "/contact", label: "Contact", icon: <ContactMailIcon sx={{ color: "#ff6f1d" }} /> }
];

function Navbar() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setIsDrawerOpen(false);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="menu"
        onClick={() => setIsDrawerOpen(true)}
        sx={{ position: "absolute", top: 0, right: 0, zIndex: 3 }}
      >
        <MenuIcon fontSize="large" sx={{ color: "#ff6f1d" }} />
      </IconButton>

      <Drawer anchor="top" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <List sx={{ bgcolor: "#21282a", color: "#ffffff",py:0.5 }}>
          <Box
            className="navBox"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexWrap: "wrap",
              flexDirection: { xs: "column", sm: "row" },
              height: { xs: 300, sm: 50 },
            }}
          >
            {navItems.map(({ path, label, icon }) => (
              <ListItem
                key={path}
                onClick={() => handleNavigate(path)}
                sx={{ width: 100, "&:hover": { cursor: "pointer" } }}
              >
                {icon}
                <Typography ml={1}>{label}</Typography>
              </ListItem>
            ))}
          </Box>
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
