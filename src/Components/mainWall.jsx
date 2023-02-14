import { Link, Paper, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { useContext } from "react";
import AppContext from "../Context/AppContext";
import Sidebar from "./sidebar";

function MainWall() {


  const Blogs = useContext(AppContext);
  const { bposts, setBposts } = Blogs;

  return (
    <Box >
      {
        bposts.map((item, i) => {
          return(
            <React.Fragment key={i}>
            <Box >
                <Paper elevation={5} sx={{mt: 5, padding: '25px',  opacity: 0.8}}>
                  <Stack spacing={2}>
                    <Typography variant="subtitle2" align="center" sx={{color: 'var( --color-two )'}}> {item.title} </Typography>
                    <Typography variant="h6" align="center" sx={{color: 'var( --color-one )'}}> {item.topic} </Typography>
                    <Typography variant="body1" align="left"> {item.content} </Typography>
                    <Link> {item.author}</Link>
                  </Stack>
                </Paper>
            </Box>
            </ React.Fragment>
          )
        })
      }
    </Box>
  )
}

export default MainWall;
