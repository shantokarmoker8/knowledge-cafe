import "./App.css";
import Header from "./components/header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header></Header>
        <div className=" mx-auto md:flex lg:flex">
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
