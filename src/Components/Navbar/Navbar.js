import {
  Box,
  Button,
  Grid,
  Link,
} from "@mui/material";
import React from "react";
import Logo from "../../Assets/Images/Logo.png";
import ColoredButton from "../Buttons/ColoredButton/ColoredButton";
import NormalButton from "../Buttons/NormalButton/NormalButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import "./Navbar.scss";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import { useState } from "react"; 
import { useEffect } from "react";

function Navbar(props) {
  //useState
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down("md"));

  //useEffect
  useEffect(() => {
    console.log(drawerOpen);
  }, [drawerOpen]);

  return (
    <div className="navbar">
      
      <Box flexGrow={1}>
        <Grid display={"flex"} container alignItems={"center"}>
          <Grid item xs={2} height={"100%"}>
            <img src={Logo} alt="Eventing" className="logo" />
          </Grid>
          <Grid item display={small ? "none" : "block"} md={7} height={"100%"}>
            <div className="nav-center">
              <ul>
                <li>
                  <Link className="nav-link">Explore</Link>
                </li>
                <li>
                  <Link className="nav-link">Venue</Link>
                </li>
                <li>
                  <Link className="nav-link">Images</Link>
                </li>
                <li>
                  <Link className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item display={small ? "none" : "block"} md={3}>
            <div className="nav-right">
              <NormalButton text={"Sign In"}></NormalButton>
              <ColoredButton text={"Sign Up"}></ColoredButton>
            </div>
          </Grid>
          {/* this is only visible on small screens (<900px) */}
          <Grid item xs={10} display={small ? "block" : "none"}>
            <div className="nav-menu-trigger-outer">
              <Button
                className="nav-menu-trigger"
                onClick={() => {
                  setDrawerOpen(!drawerOpen);
                }}
              >
                {!drawerOpen ? (
                  <MenuIcon className="menu-icon"></MenuIcon>
                ) : (
                  <CloseIcon className="menu-icon"></CloseIcon>
                )}
              </Button>
              <Drawer
                anchor={"right"}
                open={drawerOpen}
                onClose={() => {
                  setDrawerOpen(false);
                }}
                
              >
                <div className="drawer-content-outer" style={{width:'60vw'}}>
                    <ul style={{listStyleType:'none',padding:'0',margin:'0'}}>
                        <li style={{padding:'14px 32px'}}><Button onClick={()=>{setDrawerOpen(false)}} style={{color:"#49516F"}}>Close <CloseIcon style={{color:"#49516F"}}></CloseIcon></Button></li>
                        <li style={{padding:'20px 40px'}}><Link style={{textDecoration:"none",color:'#49516F'}}>Explore</Link></li>
                        <li style={{padding:'20px 40px'}}><Link style={{textDecoration:"none",color:'#49516F'}}>Venue</Link></li>
                        <li style={{padding:'20px 40px'}}><Link style={{textDecoration:"none",color:'#49516F'}}>Images</Link></li>
                        <li style={{padding:'20px 40px'}}><Link style={{textDecoration:"none",color:'#49516F'}}>Contact</Link></li>              
                    </ul>
                </div>
              </Drawer>
            </div>
          </Grid>
          {/* till here */}
        </Grid>
      </Box>
    </div>
  );
}

export default Navbar;
