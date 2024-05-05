import { MostCategory } from "@/types";
import axios from "axios";

const Urls = `${process.env.NEXT_PUBLIC_API_URL}/most-categories?populate=*`;

export const getCategory = async():Promise<MostCategory[]>=>{
    const response = await axios.get(Urls);
    const data = response.data.data;
    return data;
}