import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({ handleAddToBookmark }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3">
      {blogs.map((blog) => (
        <Blog
          key={blogs.id}
          blog={blog}
          handleAddToBookmark={handleAddToBookmark}
        ></Blog>
      ))}
    </div>
  );
};
Blog.PropTypes = {
  handleAddToBookmark: PropTypes.func,
};

export default Blogs;
