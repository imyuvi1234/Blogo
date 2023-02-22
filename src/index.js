import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import BlogPosts from "./Context/blogPosts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <BlogPosts>
      <App />
    </BlogPosts>
  </BrowserRouter>
);
