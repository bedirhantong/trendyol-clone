import { MainScreenProduct } from "@/types";
import axios from "axios";

const Urls = `${process.env.NEXT_PUBLIC_API_URL}/products?populate=*`;

export const getProducts = async():Promise<MainScreenProduct[]>=>{
    const response = await axios.get(Urls);
    const data = response.data.data;
    return data;
}