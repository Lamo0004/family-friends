import FilterButton from "@/components/FilterButton";

import allImage from "../images/all.png";
import catsImage from "../images/cats.png";
import dogsImage from "../images/dogs.png";

const Slider = ({ onCategorySelect, selectedCategory }) => {
  return (
    <section className="overflow-x-auto whitespace-nowrap">
      <div className="inline-flex gap-3">
        <FilterButton img={allImage} category="Alle" onClick={onCategorySelect} isActive={selectedCategory === "Alle"}></FilterButton>
        <FilterButton img={catsImage} category="Katte" onClick={onCategorySelect} isActive={selectedCategory === "Katte"}></FilterButton>
        <FilterButton img={dogsImage} category="Hunde" onClick={onCategorySelect} isActive={selectedCategory === "Hunde"}></FilterButton>
      </div>
    </section>
  );
};

export default Slider;
