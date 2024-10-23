import { useState } from "react";
import { useFormik } from "formik";
import { productSchema } from "../schemas/productSchema";
import useModal from "./useModal";
import { showSuccess } from "./useNotifications";
import { AddProductProps } from "../interfaces/addProduct";

export const mockProducts = [
    { id: 'A1S1', name: "Producto 1", category: "Categoría A", price: 100, quantity: 10, description: "Descripción del producto 1", image: "url-del-imagen-1" },
    { id: 'A1S2', name: "Producto 2", category: "Categoría B", price: 200, quantity: 5, description: "Descripción del producto 2", image: "url-del-imagen-2" },
];

export const useProducts = () => {
  
    const [products, setProducts] = useState(mockProducts);
    const [showAddProduct, toggleAddProduct] = useModal();
    const [showEditProduct, toggleEditProduct] = useModal();
   // const [toEditProduct, setToEditProduct] = useState(null);

    const addProductFormik = useFormik<AddProductProps>({
        initialValues: {
            id: "A1S1",
            name: '',
            category: '',
            price: 0,
            quantity: 0,
            description: '',
            image: ''
        },
        onSubmit: (values, actions) => {
            const newProduct = {
                ...values,
            };

            setProducts(prev => [...prev, newProduct]);
            actions.resetForm();
            toggleAddProduct();
	          showSuccess('Product created success');        },
        validationSchema: productSchema // Asegúrate de que tengas un esquema de validación
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
