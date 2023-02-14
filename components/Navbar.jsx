import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Image from "next/image";
export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        elevation={1}
        style={{
          height: "60px",
          background: "#fff",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "50px",
            marginLeft: "30px",
            justifyContent: "center",
          }}
        >
          <Image
            src="/Images/cvmaker.png"
            alt="error"
            width={200}
            height={60}
          />
        </Box>
      </AppBar>
    </Box>
  );
}
