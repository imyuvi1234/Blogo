import { Box } from "@mui/material";
import React from "react";
import MainWall from "./mainWall";
import Sidebar from "./sidebar";

function Home() {
  return (
    <Box sx={{ width: "95vw", margin: "auto" }} display="flex">
      <Box sx={{ width: "65vw" }}>
        <MainWall />
      </Box>
      <Box sx={{ width: "35vw", ml: 5 }}>
        <Sidebar />
      </Box>
    </Box>
  );
}

export default Home;
