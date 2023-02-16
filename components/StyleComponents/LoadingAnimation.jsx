import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import LinearProgress from "@mui/material/LinearProgress";
export default function LoadingAnimation() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <Image src="/favicon.ico" alt="error" width={75} height={75} />
      <Box sx={{ width: "100px", marginTop: "20px" }}>
        <LinearProgress sx={{height: "5px", borderRadius: "4px"}} value={20} />
      </Box>
    </Box>
  );
}
