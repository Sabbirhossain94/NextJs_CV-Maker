import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SignIn from "../components/Signin";
import { useState } from "react";

export default function Home() {
  const [openSignin, setOpenSignin]= useState(false)
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CV Builder
            </Typography>
            <Button color="inherit" onClick={() => setOpenSignin(true)}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
        {openSignin && <SignIn />}
      </Box>
    </div>
  );
}
