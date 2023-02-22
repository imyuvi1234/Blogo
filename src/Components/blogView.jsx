import { Container, Link, Paper, Tooltip, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useContext } from "react";
import AppContext from "../Context/AppContext";
// import Sidebar from "./sidebar";
import "../styles/mainwall.css";

function BlogView() {
  const Blogs = useContext(AppContext);
  const { bposts } = Blogs;

  return (
    <Box>
      {bposts.map((item, i) => {
        return (
          <React.Fragment key={i}>
            <Box>
              <Paper
                elevation={5}
                sx={{
                  mt: 5,
                  mb: 2,
                  padding: "25px",
                  backgroundColor: "#F5F5F5"
                }}
              >
                <Stack spacing={2}>
                  <Typography
                    variant="subtitle2"
                    align="center"
                    sx={{ color: "var( --color-two )" }}
                  >
                    {" "}
                    {item.title}{" "}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ color: "var( --color-two )" }}
                  >
                    {" "}
                    {item.topic}{" "}
                  </Typography>
                  {item.image !== undefined && (
                    <Container align="center">
                      <Tooltip title="Image" placement="right">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="heroblogimagesize"
                        />
                      </Tooltip>
                    </Container>
                  )}
                  <Typography variant="body1" align="left">
                    {" "}
                    {item.shortContent}{" "}
                  </Typography>
                  <Typography>
                    <Link sx={{ color: "var( --color-one )", cursor: "pointer"}}> {item.author}</Link>
                  </Typography>
                </Stack>
              </Paper>
            </Box>
          </React.Fragment>
        );
      })}
    </Box>
  );
}

export default BlogView;
