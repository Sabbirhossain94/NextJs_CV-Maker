import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, position: "fixed" }}>
      <AppBar elevation={1} color="primary" style={{ height: "60px" }}>
        <Typography
          style={{
            padding: "15px",
            fontFamily: "Arial",
            fontSize: "20px",
            marginLeft: "15px",
          }}
        >
          CVBuilder
        </Typography>
      </AppBar>
    </Box>
  );
}
