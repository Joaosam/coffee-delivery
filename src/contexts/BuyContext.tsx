import { createContext, ReactNode, useCallback, useState } from "react";
import data from ".././components/Home/data.json";

interface BuyContextData {
  totalProducts: Coffee[];
  data: typeof data;
  currentIP: string;
  ipCity: string;
  ipRegion: string;
  loading: boolean;
  methodPaymentSelected: boolean;
  setTotalProducts: (coffee: Coffee[]) => void;
  setCurrentIP: (ip: string) => void;
  setIpCity: (city: string) => void;
  setIpRegion: (region: string) => void;
  setLoading: (loading: boolean) => void;
  setMethodPaymentSelected: (selected: boolean) => void;
  handleAddProductToCart: (
    currentId: number,
    currentName: string,
    currentImage: string,
    currentPrice: number
  ) => void;
  handleDecreasesCartProducts: (currentId: number) => void;
  handleRemoveCartProducts: (currentId: number) => void;
  handleRemoveCartProductsFromCheckout: (currentId: number) => void;
}

interface Coffee {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export const BuyContext = createContext({} as BuyContextData);

export function BuyContextProvider({ children }: { children: ReactNode }) {
  const [totalProducts, setTotalProducts] = useState<Coffee[]>([]);
  const isIdInTheProducts = totalProducts.map((item) => item.id);

  const [methodPaymentSelected, setMethodPaymentSelected] = useState(false);

  const [currentIP, setCurrentIP] = useState("");
  const [ipCity, setIpCity] = useState("");
  const [ipRegion, setIpRegion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddProductToCart = useCallback(
    (
      currentId: number,
      currentName: string,
      currentImage: string,
      currentPrice: number
    ) => {
      if (
        totalProducts.length === 0 ||
        !isIdInTheProducts.includes(currentId)
      ) {
        setTotalProducts([
          ...totalProducts,
          {
            id: currentId,
            name: currentName,
            image: currentImage,
            price: currentPrice,
            quantity: 1,
          },
        ]);
      } else {
        setTotalProducts(
          totalProducts.map((state) => {
            if (state.id === currentId) {
              return { ...state, quantity: state.quantity + 1 };
            }
            return state;
          })
        );
      }
    },
    [totalProducts]
  );

  const handleDecreasesCartProducts = useCallback(
    (currentId: number) => {
      totalProducts.filter(() => {
        if (isIdInTheProducts.includes(currentId)) {
          setTotalProducts(
            totalProducts.map((state) => {
              if (state.id === currentId) {
                return { ...state, quantity: state.quantity - 1 };
              }
              return state;
            })
          );
        }
      });
    },
    [totalProducts]
  );

  const handleRemoveCartProducts = useCallback(
    (currentId: number) => {
      totalProducts.map((item) => {
        if (item.id === currentId && item.quantity === 0) {
          setTotalProducts(
            totalProducts.filter((item) => item.id !== currentId)
          );
        }
      });
    },
    [totalProducts]
  );

  const handleRemoveCartProductsFromCheckout = useCallback(
    (currentId: number) => {
      totalProducts.map((item) => {
        if (item.id === currentId) {
          setTotalProducts(
            totalProducts.filter((item) => item.id !== currentId)
          );
        }
      });
    },
    [totalProducts]
  );

  return (
    <BuyContext.Provider
      value={{
        data,
        totalProducts,
        currentIP,
        ipCity,
        ipRegion,
        loading,
        methodPaymentSelected,
        setTotalProducts,
        setCurrentIP,
        setIpCity,
        setIpRegion,
        setLoading,
        setMethodPaymentSelected,
        handleAddProductToCart,
        handleDecreasesCartProducts,
        handleRemoveCartProducts,
        handleRemoveCartProductsFromCheckout,
      }}
    >
      {children}
    </BuyContext.Provider>
  );
}
