import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Paper } from "@mui/material";
import { Login, Signup } from './pages';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function LoginSignup() {
  const theme = useTheme();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container sx={{ margin: "auto"}} className="loginsignupstyle">
      <Paper
        elevation={24}
        sx={{ height: "375px", width: "300px", margin: "auto", borderRadius: '16px' }}
      >
        <Box sx={{ marginTop: "15%" }}>
          <AppBar position="static" elevation={2} sx={{borderRadius: '16px'}}>
            <Tabs
              value={value}
              onChange={handleChange}
              inkBarStyle={{background: '#8bc34a'}}
              textColor="primary"
              sx={{ width: '100%', bgcolor: 'background.paper' }}
              centered
            >
              <Tab label="Sign Up" {...a11yProps(0)} />
              <Tab label="Sign In" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Signup/>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
             <Login/>
            </TabPanel>
          </SwipeableViews>
        </Box>
      </Paper>
    </Container>
  );
}
