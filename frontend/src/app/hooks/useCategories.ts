import { useEffect,  } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

import { useGetCategoriesQuery } from "../store/api/enpoints/CategoriesAPI";
import { setCategories } from "../store/categories/categorySlice";

const useCategories = () => {
  const categories = useSelector((state: RootState) => state.category.categories); 
  const dispatch = useDispatch();

  const { data: categoriesFetched, isLoading } = useGetCategoriesQuery();

  useEffect(() => {
    if (categoriesFetched) {
      dispatch(setCategories(categoriesFetched));
      console.log('Categories fetched:', categoriesFetched);
    }
  }, [categoriesFetched, dispatch]);

  return {
    categories,
    isLoading,
  };
};

export default useCategories;
