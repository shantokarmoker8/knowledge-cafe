import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className=" flex justify-between items-center py-8 border-b-2 border-[#11111126] ">
      <h1 className="text-4xl font-bold">
        <a href="../../../index.html">Knowledge Cafe</a>
      </h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
