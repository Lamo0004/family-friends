"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-5 left-5 right-5">
      <ul className="flex justify-around">
        <li>
          <Link href="/">
            <FiHome size={24} className={pathname === "/" ? "text-[#f2968f]" : "text-[#ACACAC]"} />
          </Link>
        </li>
        <li>
          <Link href="favorites">
            <FaRegStar size={24} className={pathname === "/favorites" ? "text-[#f2968f]" : "text-[#ACACAC]"} />
          </Link>
        </li>
        <li>
          <Link href="chat">
            <IoChatbubbleOutline size={24} className={pathname === "/chat" ? "text-[#f2968f]" : "text-[#ACACAC]"} />
          </Link>
        </li>
        <li>
          <Link href="profile">
            <FiUser size={24} className={pathname === "/profile" ? "text-[#f2968f]" : "text-[#ACACAC]"} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
