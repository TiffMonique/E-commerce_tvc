import useModal from "./useModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useAddProductMutation, useDeleteProductMutation, useEditProductMutation, useGetProductsQuery } from "../store/api/enpoints/ProductsAPI";
import {  setProducts } from "../store/products/productSlice";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { ProductProps } from "../interfaces/product";
import { productSchema } from "../schemas/productSchema";
import { showSuccess } from "./useNotifications";
import { v4 as uuidv4 } from "uuid"; 

export const useProducts = () => {
  
    const products = useSelector((state: RootState) => state.product.products); 
  const dispatch = useDispatch();
  
    const [showAddProduct, toggleAddProduct] = useModal();
  const [showEditProduct, toggleEditProduct] = useModal();
  const [addProduct] = useAddProductMutation(); 
      const [deleteProduct] = useDeleteProductMutation();
 const [toEditProduct, setToEditProduct] = useState<ProductProps | null>(null);
  const [updateProduct] = useEditProductMutation();

    
    const { data: productsFetched, isLoading } = useGetProductsQuery();

  useEffect(() => {
    if (productsFetched) {
      dispatch(setProducts(productsFetched));
    }
  }, [productsFetched, dispatch]);

    const addProductFormik = useFormik<ProductProps>({
        initialValues: {
            id:uuidv4().substring(0,13),
            name: '',
            category: {
              id: '',
              name: ''
            },
            price: 0,
            quantity: 0,
            description: '',
            image: null
      },
      
        onSubmit: async (values, actions) => {
            let imageBase64 = null;
            if (values.image) {
                const reader = new FileReader();
                imageBase64 = await new Promise((resolve) => {
                    reader.onloadend = () => resolve(reader.result);
                    reader.readAsDataURL(values.image as File);
                });
            }
          
        
          
            const newProduct = {
                ...values,
                image: imageBase64 as string
            };
          
          const typedProduct = {
                ...newProduct,
                image: imageBase64 as File | null
            };
            toggleAddProduct();
            await addProduct(typedProduct);
            actions.resetForm();
            showSuccess('Product created success');
        },
        validationSchema: productSchema 
    });
  
    const handleDeleteProduct = async (id: string) => {
        try {
            await deleteProduct(id);
            showSuccess('Producto eliminado exitosamente');
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    };

   const editProductFormik = useFormik<ProductProps>({
    initialValues: {
      id: toEditProduct?.id || '',
      name: toEditProduct?.name || '',
      category: toEditProduct?.category || {
        id: '',
        name: ''
      },
      price: toEditProduct?.price || 0,
      quantity: toEditProduct?.quantity || 0,
      description: toEditProduct?.description || '',
      image: toEditProduct?.image || null
    },
    onSubmit: async (values, actions) => {
      let imageBase64 = null;
      if (values.image instanceof File) {
        const reader = new FileReader();
        imageBase64 = await new Promise((resolve) => {
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(values.image as File);
        });
      }

      const updatedProduct = {
        ...values,
        image: imageBase64 || values.image
      };

      await updateProduct(updatedProduct as ProductProps);
      actions.resetForm();
      toggleEditProduct();
      showSuccess('Producto editado exitosamente!');
    },
    enableReinitialize: true,
    validationSchema: productSchema
  });

  const handleEditProduct = (product: ProductProps) => {
    setToEditProduct(product);
    toggleEditProduct();
  };
    return {
        products,
        isLoading,
        showAddProduct,
        showEditProduct,
        addProductFormik,
        editProductFormik,

        handleEditProduct,
        toggleAddProduct,
      toggleEditProduct,
        handleDeleteProduct ,
    };
};
