import Image from "next/image";

const FilterButton = ({ img, category }) => {
  return (
    <button className="flex items-center gap-2.5 border-1 border-[#33333366] py-2.5 ps-2.5 pe-15 rounded-full">
      <Image src={img} alt="filter category imgage" width={300} height={300} className="rounded-full w-8 h-8"></Image>
      <p className="text-[#33333366]">{category}</p>
    </button>
  );
};

export default FilterButton;
