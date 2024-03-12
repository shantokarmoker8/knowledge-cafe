import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const { title, cover } = blog;
  return (
    <div>
      <img src={cover} alt="" />
    </div>
  );
};
Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
