import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={2}
        style={{
          height: "70px",
          background: "#fff",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src="/favicon.png" alt="error" width={45} height={45} />
          <Typography
            sx={{
              color: "black",
              fontWeight: "700",
              marginTop: "5px",
              marginLeft: "5px",
              fontSize: "20px",
            }}
          >
            <span style={{ color: "#1976d2" }}>CV </span>
            <span style={{ color: "#616161" }}>Builder</span>
          </Typography>
        </Box>
      </AppBar>
    </Box>
  );
}
