import useModal from "./useModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useAddProductMutation, useGetProductsQuery } from "../store/api/enpoints/ProductsAPI";
import {  setProducts } from "../store/products/productSlice";
import { useEffect } from "react";
import { useFormik } from "formik";
import { AddProductProps } from "../interfaces/addProduct";
import { productSchema } from "../schemas/productSchema";
import { showSuccess } from "./useNotifications";
import { v4 as uuidv4 } from "uuid"; 

export const useProducts = () => {
  
    const products = useSelector((state: RootState) => state.product.products); 
  const dispatch = useDispatch();
  
    const [showAddProduct, toggleAddProduct] = useModal();
  const [showEditProduct, toggleEditProduct] = useModal();
      const [addProduct] = useAddProductMutation(); // Añade esta línea al inicio

    // const [toEditProduct, setToEditProduct] = useState(null);
    
    const { data: productsFetched, isLoading } = useGetProductsQuery();

  useEffect(() => {
    if (productsFetched) {
      dispatch(setProducts(productsFetched));
    }
  }, [productsFetched, dispatch]);

    const addProductFormik = useFormik<AddProductProps>({
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
            // Convertir la imagen a base64
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

            await addProduct(typedProduct);
            actions.resetForm();
            toggleAddProduct();
            showSuccess('Product created success');
        },
        validationSchema: productSchema 
    });

    // const editProductFormik = useFormik({
    //     initialValues: {
    //         id: toEditProduct?.id || '',
    //         name: toEditProduct?.name || '',
    //         category: toEditProduct?.category || '',
    //         price: toEditProduct?.price || 0,
    //         quantity: toEditProduct?.quantity || 0,
    //         description: toEditProduct?.description || '',
    //         image: toEditProduct?.image || ''
    //     },
    //     onSubmit: (values, actions) => {
    //         setProducts(prev =>
    //             prev.map(product => product.id === values.id ? values : product)
    //         );
    //         actions.resetForm();
    //         toggleEditProduct();
    //         Notification({ type: "success", message: "Producto editado exitosamente!" });
    //     },
    //     enableReinitialize: true,
    //     validationSchema: productSchema // Asegúrate de que tengas un esquema de validación
    // });

    // const removeProduct = (id) => {
    //     setProducts(prev => prev.filter(product => product.id !== id));
    //     Notification({ type: "success", message: "Producto eliminado exitosamente!" });
    // };

    // const handleEditProduct = (product) => {
    //     setToEditProduct(product);
    //     toggleEditProduct(true);
    // };

    return {
        products,
        isLoading,
        showAddProduct,
        showEditProduct,
        addProductFormik,
       // editProductFormik,
       // handleEditProduct,
        toggleAddProduct,
        toggleEditProduct,
       // removeProduct
    };
};
