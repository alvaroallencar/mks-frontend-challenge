import { productsApi } from "@/services/productsApi";
import { IProductsListProps } from "./interfaces";

try {
  const productsList = productsApi.get("products?page=1&rows=10&sortBy=id&orderBy=ASC");

  console.log(productsList);
} catch (error) {
  console.log(error);
}

export const ProductsList = (props: IProductsListProps) => {};
