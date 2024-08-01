export type Product = {
  id: string;
  name: string;
  price: number;
  brand: string;
  isShow: boolean;
};
export type PrdInputs = Omit<Product, "id">;
