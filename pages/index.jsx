import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Box from "@mui/material/Box";

export default function index() {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden"
      }}
    >
      <Head>
        <title>CV Builder</title>
      </Head>
      <Box>
        <Navbar />
      </Box>
      <Home />
    </Box>
  );
}
