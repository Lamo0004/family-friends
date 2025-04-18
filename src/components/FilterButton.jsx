import Image from "next/image";

const FilterButton = ({ img, category, onClick, isActive }) => {
  const textColor = isActive ? "text-white" : "text-[#33333366]";

  return (
    <button
      className={`flex items-center gap-2.5 border py-2.5 ps-2.5 pe-4 rounded-full transition
        ${isActive ? "bg-[#F2968F] border-[#F2968F]" : "bg-white border-[#33333366] hover:bg-gray-100"}`}
      onClick={() => onClick(category)}
    >
      <Image src={img} alt={category} width={300} height={300} className="rounded-full w-8 h-8"></Image>
      <p className={`${textColor} font-medium`}>{category}</p>
    </button>
  );
};

export default FilterButton;
