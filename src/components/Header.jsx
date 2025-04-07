import { VscBellDot } from "react-icons/vsc";

const Header = () => {
  return (
    <header className="flex justify-between content-center">
      <h3 className="text-black text-lg font-extrabold">FamilyFriends</h3>
      <VscBellDot size={24} className="text-[#333333]" />
    </header>
  );
};

export default Header;
