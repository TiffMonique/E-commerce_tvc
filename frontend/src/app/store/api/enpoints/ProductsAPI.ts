import { AddProductProps } from "@/app/interfaces/addProduct";
import { api } from "../api";
import { Products } from "../Tags/Products";


const transformGetOrdersResponse = (responseData: any): AddProductProps[] => {
  return responseData.map(({ category, price, name, description, image, stock , productId}: any): AddProductProps => ({
    id: productId,
    name: name,
    category: category,
    price: price,
    description: description,
    image: image,
    quantity: stock      
    }));
};

export const ProductsAPI = api.injectEndpoints({
    endpoints: build => ({
        getProducts: build.query<AddProductProps[], void>({
            query: () => ({
                url: "/api/products",
                method: "GET",
            }),
            providesTags: [Products],
            transformResponse: transformGetOrdersResponse
        }),
        addProduct: build.mutation<AddProductProps, AddProductProps>({
            query: (
                { id,
                    category,
                    name,
                    price,
                    description,
                    image,
                    quantity }
            ) => {
                
                return {
                    url: "/api/product",
                    method: "POST",
                    body: {
                        productId: id,
                        category,
                        name,
                        price,
                        description,
                        image,
                        stock: quantity
                    }
                }
            },
            invalidatesTags: [Products]
        })
    })
});

export const {
    useGetProductsQuery,
    useAddProductMutation
} = ProductsAPI;
