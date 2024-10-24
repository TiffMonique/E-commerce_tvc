export interface AddProductProps {
    id: string;
    name: string;
    category: string;
    price: number;
    quantity: number; 
    description: string;
    stock?: number;
    image: string; 
}
