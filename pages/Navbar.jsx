import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState ,useEffect} from "react";
import { supabase } from "../api";
import Avatar from "@mui/material/Avatar";

export default function Home() {
  const [session, setSession] = useState(null);
  
 useEffect(() => {
   supabase.auth.getSession().then(({ data: { session } }) => {
     setSession(session);
   });

   supabase.auth.onAuthStateChange((_event, session) => {
     setSession(session);
    // console.log(session);
   });
 }, []);
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

            <Avatar
              src="https://i.imgur.com/zaDSsB1.png"
              sx={{ height: "30px", width: "30px" }}
            />
            <Link href="/SignIn">
              <Button color="inherit">Sign In</Button>
            </Link>
            {/* <Link href="/SignUp">
              <Button color="inherit" onClick={() => setOpenSignUp(true)}>
                Sign Up
              </Button>
            </Link> */}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
