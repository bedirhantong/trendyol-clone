import { getCategory } from "@/actions/getMostCat";
import { getSlider } from "@/actions/getSlider";
import { MainScreenProduct } from "@/components/MainScreenProduct";
import Sliders from "@/components/Slider";
import SuprisedCategories from "@/components/SuprisedCategories";

export default async function Home() {
  const sliderList = await getSlider();
  const mostCategory = await getCategory();
  return (
    <div className="px-20 py-5 container">
      <Sliders sliderList={sliderList} />
      <SuprisedCategories suprisedCategoryList={mostCategory} />
      <h2 className="p-2 flex justify-start font-semibold">Popüler Ürünler</h2>
      <MainScreenProduct/>
      <h2 className="p-2 flex justify-start font-semibold">Çok Satan Ürünler</h2>
      <h2 className="p-2 flex justify-start font-semibold">Avantajlı Ürünler</h2>
    </div>
  );
}
