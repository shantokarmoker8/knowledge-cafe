import PropTypes from "prop-types";
import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,

    time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 flex flex-col gap-4">
      <img src={cover} alt="" className="w-full rounded-2xl" />
      <div className="flex justify-between">
        <div className="flex">
          <img src={author_img} alt="" className="w-[60px] rounded-full" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex  items-center gap-2">
          <p>{time} read</p>

          <button onClick={() => handleAddToBookmark(blog)}>
            <IoBookmarkOutline />
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>{hashtags}</p>
    </div>
  );
};
Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
};
export default Blog;
