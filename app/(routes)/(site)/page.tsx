import { getCategory } from "@/actions/getMostCat";
import { getProducts } from "@/actions/getProduct";
import { getSlider } from "@/actions/getSlider";
import { MainScreenProductList } from "@/components/MainScreenProduct";
import Sliders from "@/components/Slider";
import SuprisedCategories from "@/components/SuprisedCategories";

export default async function Home() {
  const sliderList = await getSlider();
  const mostCategory = await getCategory();
  const productList = await getProducts();
  return (
    <div className="px-20 py-5 container">
      <Sliders sliderList={sliderList} />
      <SuprisedCategories suprisedCategoryList={mostCategory} />
      <h2 className="p-2 flex justify-start font-semibold">Popüler Ürünler</h2>
      <MainScreenProductList mainScreenProductList={productList} />
      <h2 className="p-2 flex justify-start font-semibold">Çok Satan Ürünler</h2>
      <MainScreenProductList mainScreenProductList={productList} />
      <h2 className="p-2 flex justify-start font-semibold">Avantajlı Ürünler</h2>
      <MainScreenProductList mainScreenProductList={productList} />
        <footer className="bg-black py-12 px-6 flex flex-col items-center">
            <div className="flex flex-wrap justify-between max-w-7xl">
              <div className="flex items-center">
                <nav className="ml-4">
                  <ul className="list-none">
                    <li className="inline-block mr-4 dropdown">
                      <a href="#" className="text-white hover:text-gray-500 dropdown-toggle" data-bs-toggle="dropdown">About Us</a>
                      <ul className="dropdown-menu bg-black text-white">
                        <li><a href="#" className="dropdown-item">Biz Kimiz</a></li>
                        <li><a href="#" className="dropdown-item">Sustainability</a></li>
                      </ul>
                    </li>
                    <li className="inline-block mr-4 dropdown">
                      <a href="#" className="text-white hover:text-gray-500 dropdown-toggle" data-bs-toggle="dropdown">Kampanyalar</a>
                      <ul className="dropdown-menu bg-black text-white">
                        <li><a href="#" className="dropdown-item">Aktif Kampanyalar</a></li>
                        <li><a href="#" className="dropdown-item">Trendyol Fırsatları</a></li>
                      </ul>
                    </li>
                    <li className="inline-block mr-4 dropdown">
                      <a href="#" className="text-white hover:text-gray-500 dropdown-toggle" data-bs-toggle="dropdown">Yardım</a>
                      <ul className="dropdown-menu bg-black text-white">
                        <li><a href="#" className="dropdown-item">Sıkça Sorulan Sorular</a></li>
                        <li><a href="#" className="dropdown-item">Canlı Yardım</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>            
            <div className="mt-6 flex justify-center">
              <p className="text-white text-sm">© 2024 Trendyol. Cloned by Bedirhan Tong.</p>
            </div>
        </footer>
    </div>
  );
}
