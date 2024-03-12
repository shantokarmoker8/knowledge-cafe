import "./App.css";
import Header from "./components/header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";
function App() {
  const [bookmarks, setBookmark] = useState([]);
  const handleAddToBookmark = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmark(newBookmark);
  };
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header></Header>
        <div className=" mx-auto md:flex lg:flex">
          <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
