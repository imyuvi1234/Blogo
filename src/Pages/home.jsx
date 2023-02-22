import { Box } from "@mui/material";
import React from "react";
import {BlogView, Sidebar } from "../Components/allComponents";
  


function Home() {
  return (
    <Box sx={{ width: "95vw", margin: "auto" }} display="flex">
      <Box sx={{ width: "65vw" }}>
        <BlogView />
      </Box>
      <Box sx={{ width: "35vw", ml: 5 }}>
        <Sidebar />
      </Box>
    </Box>
  );
}

export default Home;
