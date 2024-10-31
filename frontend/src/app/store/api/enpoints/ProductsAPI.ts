import { ProductProps } from "@/app/interfaces/product";
import { api } from "../api";
import { Products } from "../Tags/Products";


const transformGetOrdersResponse = (responseData: any): ProductProps[] => {
  return responseData.map(({ category, price, name, description, image, stock , productId}: any): ProductProps => ({
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
        getProducts: build.query<ProductProps[], void>({
            query: () => ({
                url: "/api/products",
                method: "GET",
            }),
            providesTags: [Products],
            transformResponse: transformGetOrdersResponse
        }),
        addProduct: build.mutation<ProductProps, ProductProps>({
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
        }),
         deleteProduct: build.mutation<void, string>({
            query: (productId) => ({
                url: `/api/product/${productId}`,
                method: "DELETE"
            }),
            invalidatesTags: [Products]
         }),
         editProduct: build.mutation<ProductProps, ProductProps>({
            query: ({
                id,
                category,
                name,
                price,
                description,
                image,
                quantity
            }) => ({
                url: `/api/product/${id}`,
                method: "PUT",
                body: {
                    category,
                    name,
                    price,
                    description,
                    image,
                    stock: quantity
                }
            }),
            invalidatesTags: [Products]
        }),
    })
});

export const {
    useGetProductsQuery,
    useAddProductMutation,
    useDeleteProductMutation,
    useEditProductMutation
} = ProductsAPI;
