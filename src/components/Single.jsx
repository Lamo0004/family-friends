import Arrow from "./Arrow";
import OtherCard from "./OtherCard";
import Details from "./Details";
import Button from "./Button";

const Single = () => {
  return (
    <article>
      <div className="bg-pink-400 w-80 h-96 rounded-4xl"></div>
      <Arrow></Arrow>
      <OtherCard></OtherCard>
      <h1>Samojed Willie</h1>
      <Details></Details>
      <p className="text-[#33333366]">Den venligste Samojed, vi nogensinde har mødt. Elsker at lege med bolde og er venlig over for andre dyr. På trods af sin hvide pels elsker den regn og vandpytter.</p>
      <p className="text-[#33333366] text-[13px]">Opdateret den 13. juli.</p>
      <Button></Button>
    </article>
  );
};

export default Single;
