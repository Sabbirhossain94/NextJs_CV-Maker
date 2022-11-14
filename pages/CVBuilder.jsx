import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useState } from "react";
import PersonalDetails from "../components/PersonalDetails";
import Education from "../components/Education";
import SocialLinks from "../components/SocialLinks";
import Employment from "../components/Employment";
import AddIcon from "@mui/icons-material/Add";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography } from "@mui/material";

export default function CVBuilder() {
  const [progress, setProgress] = useState(20);
 
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          width: "50vw",
          height: "100vh",
          padding: "5%",
          backgroundColor: "white",
        }}
      >
        <Box sx={{ marginTop: "10px", width: "100%" }}>
          <LinearProgress variant="determinate" value={progress} />

          <Box sx={{ marginTop: "4rem", width: "100%" }}>
            <PersonalDetails />
            <Employment />
            <Education />
            <SocialLinks />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "50vw",
          height: "100vh",
          backgroundColor: "#e0e0e0",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Box sx={{ marginTop: "10px", width: "100%" }}></Box>
      </Box>
    </Box>
  );
}
