import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3">
      <h3>blogs {blogs.length}</h3>
      {blogs.map((blog) => (
        <Blog key={blogs.id} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
