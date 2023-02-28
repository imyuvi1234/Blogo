import {
  Box,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import AppContext from '../Context/AppContext';

function Sidebar() {
  const InterestOptions = useContext(AppContext);
  const { interestfields, bposts } = InterestOptions;

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const newList = shuffle(bposts);

  const [formats, setFormats] = useState([]);

  const handleFormat = (e, formats) => {
    setFormats(formats);
    console.log(formats);
  };

  return (
    <React.Fragment>
      <Box>
        <Paper
          elevation={5}
          sx={{
            mt: 5,
            padding: '25px',
            backgroundColor: 'var( --color-four )',
          }}
        >
          <Box sx={{ mt: '10px' }}>
            <Typography
              variant="body1"
              align="center"
              sx={{
                textDecoration: 'underline',
                textDecorationColor: '#1871db',
                mb: '2px',
              }}
            >
              Trending topics this week
            </Typography>
          </Box>

          <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="Interest Options"
            size="small"
            sx={{ flexWrap: 'wrap' }}
          >
            {interestfields.map((item) => {
              return (
                <ToggleButton
                  key={item.interestId}
                  value={item.topic}
                  aria-label={item.topic}
                  sx={{
                    padding: '4px',
                    width: 'auto',
                    flex: 'none',
                    '&.MuiToggleButtonGroup-grouped': {
                      mx: 2,
                      my: 1,
                      border: '1px solid #008c74 !important',
                      borderRadius: '3px 7px !important',
                      color: 'var( --color-one )',
                    },
                  }}
                >
                  {item.topic}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>

          <Divider sx={{ marginTop: '15px' }} />

          <Stack direction="column">
            <Box sx={{ mt: '10px' }}>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  textDecoration: 'underline',
                  textDecorationColor: '#1871db',
                  mb: '2px',
                }}
              >
                Trending blogs this week
              </Typography>
            </Box>
            {newList.map((item, i) => {
              return (
                <Stack
                  direction="column"
                  key={i}
                  sx={{ mt: '10px', mb: '10px', cursor: 'pointer' }}
                >
                  <Box
                    sx={{
                      display: 'inline',
                      border: '1px solid #1871db',
                      p: '7px',
                      borderRadius: '5px',
                    }}
                  >
                    {i + 1}. {item.title}
                  </Box>
                </Stack>
              );
            })}
          </Stack>
        </Paper>
      </Box>
    </React.Fragment>
  );
}

export default Sidebar;
