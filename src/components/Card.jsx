import Image from "next/image";

const Card = ({ animal }) => {
  return (
    <li className="flex flex-col gap-1 mb-2 rounded-2xl shadow">
      <div className="bg-amber-600 w-40 h-28 rounded-2xl"></div>
      {/* <Image src="#" alt="-" width={100} height={100} className="rounded-2xl"/> */}
      <div className="flex justify-between items-center mx-2">
        <h2 className="max-w-[100px]">{animal.name}</h2>
        <p className="text-[#33333366] text-[13px]">{animal.age}</p>
      </div>
      <p className="text-[#33333366] text-xs mx-2 mb-4 max-w-[140px]">{animal.breeds}</p>
    </li>
  );
};

export default Card;
