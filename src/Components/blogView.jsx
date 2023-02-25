import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';

function BlogView() {
  const Blogs = useContext(AppContext);
  const { bposts } = Blogs;

  return;
}

export default BlogView;
