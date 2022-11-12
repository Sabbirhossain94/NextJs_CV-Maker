import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LinearProgress from "@mui/material/LinearProgress";
import { useState } from "react";
import GridLabel from "../components/GridLabel"
import Education from "../components/Education"
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
export default function FlexLayoutGrid() {
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
          backgroundColor: "#e0e0e0",
          
        }}
      >
        <Box sx={{ marginTop: "10px", width: "100%" }}>
          <LinearProgress variant="determinate" value={progress} />

          <Box sx={{ marginTop: "8rem", width: "100%" }}>
            
            <GridLabel />
            <Education/>
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
