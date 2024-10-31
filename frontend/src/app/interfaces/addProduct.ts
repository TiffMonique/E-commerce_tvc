export interface AddProductProps {
    id: string;
    name: string;
    category: {
        id: string;
        name: string;
    };
    price: number;
    quantity: number; 
    description: string;
    stock?: number;
    image: File | null|string |undefined; 
}


export interface ProductProps {
  name: string;
  price: number;
  description: string;
  stock?: number;
  image: string; 
}

