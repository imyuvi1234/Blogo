import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import { Stack, TextField } from "@mui/material";



const Signup = () => {

  // Input Value States 
  const [namevalue, setNameValue] = useState("");
  const [emailvalue, setEmailValue] = useState("");
  const [passwordvalue, setPasswordValue] = useState("");



  // Validation State.
  const [validation, setValidation] = useState({
    name: true,
    email: true,
    password: true,
  });


  // Helpertext states according to validation.
  const [namehelpertext, setNameHelpertext] = useState("Profile name should be unique.");
  const [emailhelpertext, setEmailHelpertext] = useState("You will be verified via this email.");
  const [passwordhelpertext, setPasswordHelpertext] = useState("Please Include a letter & a number.");
  



  function testname(e) {
    
      if (/[^0-9a-zA-Z]/.test(e.target.value)) {
        setValidation((validation) => ({
          name: false,
          email: true,
          password: true,
        }));
        setNameHelpertext("Special Characters are not allowed.")
      } else if (e.target.value.length === 0){
        setNameHelpertext("Profile name should be unique.")
      }
      else {
        setValidation((validation) => ({
          name: true,
          email: true,
          password: true,
        }));
        setNameHelpertext("Your Name is Unique")
      }
    
    
    
  }
  function testemail(e) {
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)) {
      setValidation((validation) => ({
        name: true,
        email: true,
        password: true,
      }));
      
    } else {
      setValidation((validation) => ({
        name: true,
        email: false,
        password: true,
      }));
    }
  }
  function testpassword(e) {

    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e.target.value)) {
      setValidation((validation) => ({
        name: true,
        email: true,
        password: true,
      }));  
      setPasswordHelpertext("Your Password Looks strong.");
    } 
    else if (e.target.value.length >= 8){
      setValidation((validation) => ({
        name: true,
        email: true,
        password: false,
      }));
      setPasswordHelpertext("Please try in Valid format");
    }
    else {
      setValidation((validation) => ({
        name: true,
        email: true,
        password: false,
      }));
      setPasswordHelpertext("Minimum 8 characters required.");
    }

    console.log(validation.password);
  }

  return (
    <Container maxWidth="sm">
        <Box>
          <Stack
            direction="column"
            sx={{ margin: "auto" }}
            spacing={1}
          >
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              required
              value={namevalue}
              size="small"
              onChange={(e) => {
                setNameValue(e.target.value);
                testname(e);
              }}
              error={!validation.name}
              helperText={namehelpertext}
            />
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              size="small"
              required
              value={emailvalue}
              error={!validation.email}
              onChange={(e) => {
                setEmailValue(e.target.value);
                testemail(e);
              }}
              helperText={emailhelpertext}
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              size="small"
              required
              value={passwordvalue}
              error={!validation.password}
              onChange={(e) => {
                setPasswordValue(e.target.value);
                testpassword(e);
              }}
              helperText={passwordhelpertext}
              
            />
          </Stack>

          <Stack direction="column"
            sx={{ width: "50%", margin: "auto", marginTop: "10%" }}
            spacing={2}>
            <Button variant="outlined">Sign Up</Button>
          </Stack>
        </Box>
      
    </Container>
  );
};

export default Signup;
