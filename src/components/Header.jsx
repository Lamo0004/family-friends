import HeaderBelNotification from "./HeaderBellNotification";

const Header = () => {
  return (
    <header className="flex justify-between content-center">
      <h3 className="text-black text-lg font-extrabold">FamilyFriends</h3>
      <HeaderBelNotification></HeaderBelNotification>
    </header>
  );
};

export default Header;
