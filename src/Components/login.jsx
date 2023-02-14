import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { Button, Stack, TextField } from "@mui/material";

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Box>
        <Stack direction="column" spacing={2}>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            size="small"
            required
            sx={{ marginTop: "5%" }}
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            size="small"
            required
          />
        </Stack>

        <Stack
          direction="column"
          sx={{ width: "50%", margin: "auto", marginTop: "25%" }}
          spacing={2}
        >
          <Button variant="outlined">LOGIN</Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Login;
