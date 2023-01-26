import Home from "../components/Home";
import Navbar from "../components/Navbar"
import Head from "next/head";
export default function index() {
  return (
    <div>
      <Head>
        <title>CV Builder</title>
      </Head>
      <div>
        <Navbar />
      </div>
      <Home />
    </div>
  );
}
