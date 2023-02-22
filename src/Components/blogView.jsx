import {
  Box,
  Container,
  Link,
  Paper,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import Image1 from "../Assests/Images/image_1.jpg";

function BlogView() {
  const Blogs = useContext(AppContext);
  const { bposts } = Blogs;

  return (
    <Container>
      <Box display={'flex'}>
        <Box>
          {' '}
          <img
            src={Image1}
            // alt={item.title}
            loading="lazy"
          />
        </Box>
        <Box></Box>
      </Box>
    </Container>
  );
}

export default BlogView;
