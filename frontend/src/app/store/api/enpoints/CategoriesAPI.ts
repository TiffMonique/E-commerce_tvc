
import { Category } from "@/app/interfaces/categories";
import { api } from "../api";
import { Categories } from "../Tags/Categories";


const transformGetCategoriesResponse = (responseData: any): Category[] => {
    return responseData.map(({ id, name }: any): Category => ({
        id: id,
        name: name,
    }));
};

export const CategoryAPI = api.injectEndpoints({
    endpoints: build => ({
        getCategories: build.query<Category[], void>({
            query: () => ({
                url: "/api/categories",
                method: "GET",
            }),
            providesTags: [Categories],
            transformResponse: transformGetCategoriesResponse,
        }),
      
    }),
});

export const {
    useGetCategoriesQuery,
   
} = CategoryAPI;
