"use client";
import useStore from "@/app/store/notificationStore"; // Importerer Zustand store

// Import af to bell iconer – en med prik og en uden
import { VscBellDot } from "react-icons/vsc";
import { GoBell } from "react-icons/go";

const HeaderBelNotification = () => {
  const { messages } = useStore(); // Henter state variablen 'messages' fra Zustand store

  // Hvis messages fra notificationStore.js er større end 0, så vises bell icon med en prik/notifikation, og hvis messages er mindre end 0, så vises bell uden prik/notifikation.
  return <div>{messages > 0 ? <VscBellDot size={24} className="text-[#333333]" /> : <GoBell size={24} className="text-[#333333]" />}</div>;
};

export default HeaderBelNotification;
