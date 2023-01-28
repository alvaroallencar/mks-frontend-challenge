import { Inter } from "@next/font/google";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "@/store/reducers/products";
import { RootState } from "../store";
import { productsApi } from "@/services/productsApi";
import { GetServerSideProps } from "next";

const inter = Inter({ subsets: ["latin"] });

interface IHomeProps {
  productsList: Object;
}

const getProducts = async () => {
  try {
    const response = await productsApi.get(
      "products?page=1&rows=10&sortBy=id&orderBy=ASC"
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default function Home({ productsList }: IHomeProps) {
  const { name } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  console.log(productsList);

  const handleClick = () => {
    dispatch(setProducts("Clicou!"));
    console.log(name);
  };

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handleClick}>Button</button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const productsList = await getProducts();

  return {
    props: {
      productsList,
    },
  };
};
