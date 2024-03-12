const Bookmarks = ({ bookmarks }) => {
  return (
    <div className=" w-1/3">
      <h3 className="text-3xl font-bold">
        Bookmarked Blogs: {bookmarks.length}
      </h3>
    </div>
  );
};

export default Bookmarks;
