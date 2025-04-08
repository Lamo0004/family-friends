import FilterButton from "@/components/FilterButton";

import allImage from "../images/all.png";
import catsImage from "../images/cats.png";
import dogsImage from "../images/dogs.png";

const Slider = () => {
  return (
    <section className="overflow-x-auto whitespace-nowrap">
      <div className="inline-flex gap-3">
        <FilterButton img={allImage} category="Alle"></FilterButton>
        <FilterButton img={catsImage} category="Katte"></FilterButton>
        <FilterButton img={dogsImage} category="Hunde"></FilterButton>
      </div>
    </section>
  );
};

export default Slider;
