import React from 'react';
import { FormikProps } from 'formik';
import { AddProductProps } from '../interfaces/addProduct';
import { ModalProps } from '../interfaces/Global';
import { IoClose } from 'react-icons/io5';

interface Props extends ModalProps {
  addProductFormik: FormikProps<AddProductProps>;
}

const AddProduct = ({ isOpen, addProductFormik, toggle }: Props) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`}>
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center pb-3">
          <div className="flex-1 text-center">
            <h2 className="text-xl font-semibold">Agregar un Producto</h2>
          </div>
          <button onClick={toggle} className="text-gray-500 hover:text-gray-700">
            <IoClose />
          </button>
        </div>

        <form onSubmit={addProductFormik.handleSubmit} className="space-y-2 mt-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Categoría
            </label>
            <input
              id="category"
              name="category"
              placeholder='Selecciona una categoría'
              type="text"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={addProductFormik.values.category}
              onChange={addProductFormik.handleChange}
              onBlur={addProductFormik.handleBlur}
            />
            {addProductFormik.touched.category && addProductFormik.errors.category && (
              <span className="text-red-500 text-sm">{addProductFormik.errors.category}</span>
            )}
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              placeholder='Ingresa el Nombre del producto'
              type="text"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={addProductFormik.values.name}
              onChange={addProductFormik.handleChange}
              onBlur={addProductFormik.handleBlur}
            />
            {addProductFormik.touched.name && addProductFormik.errors.name && (
              <span className="text-red-500 text-sm">{addProductFormik.errors.name}</span>
            )}
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Precio
            </label>
            <input
              id="price"
              name="price"
              placeholder='Ingresa el Precio del producto'
              type="number"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={addProductFormik.values.price}
              onChange={addProductFormik.handleChange}
              onBlur={addProductFormik.handleBlur}
            />
            {addProductFormik.touched.price && addProductFormik.errors.price && (
              <span className="text-red-500 text-sm">{addProductFormik.errors.price}</span>
            )}
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Cantidad
            </label>
            <input
              id="quantity"
              name="quantity"
              placeholder='Ingresa la cantidad en stock'
              type="number"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={addProductFormik.values.quantity}
              onChange={addProductFormik.handleChange}
              onBlur={addProductFormik.handleBlur}
            />
            {addProductFormik.touched.quantity && addProductFormik.errors.quantity && (
              <span className="text-red-500 text-sm">{addProductFormik.errors.quantity}</span>
            )}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              placeholder='Ingresa una descripción del producto'
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={addProductFormik.values.description}
              onChange={addProductFormik.handleChange}
              onBlur={addProductFormik.handleBlur}
            />
            {addProductFormik.touched.description && addProductFormik.errors.description && (
              <span className="text-red-500 text-sm">{addProductFormik.errors.description}</span>
            )}
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Imagen
            </label>
            <input
              id="image"
              name="image"
              type="text"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={addProductFormik.values.image}
              onChange={addProductFormik.handleChange}
              onBlur={addProductFormik.handleBlur}
            />
            {addProductFormik.touched.image && addProductFormik.errors.image && (
              <span className="text-red-500 text-sm">{addProductFormik.errors.image}</span>
            )}
          </div>

          <div className="mt-6 space-y-2">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary border border-secondary text-white rounded-md hover:bg-secondary"
              disabled={addProductFormik.isSubmitting}
            >
              Confirm
            </button>
            <button
              type="button"
              className="w-full py-2 px-4 bg-background border text-black rounded-md"
              onClick={toggle}
              disabled={addProductFormik.isSubmitting}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
