import { productsApi } from "@/services/productsApi";
import { IGetProductsProps } from "@/interfaces/products";

export const getProducts = async (props: IGetProductsProps) => {
  const { pages, rows, sortBy, orderBy } = props;

  try {
    const response = await productsApi.get(
      `products?page=${pages}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
