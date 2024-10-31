'use client'
import React, { useState } from 'react';
import { FormikProps } from 'formik';
import { ProductProps } from '../interfaces/product';
import { ModalProps } from '../interfaces/Global';
import { IoClose } from 'react-icons/io5';
import useCategories from '../hooks/useCategories';

interface Props extends ModalProps {
  editProductFormik: FormikProps<ProductProps>;
}

const EditProduct = ({ isOpen, editProductFormik, toggle }: Props) => {
  const { categories } = useCategories();
  const [fileName, setFileName] = useState(editProductFormik.values.image || '');

  if (!isOpen) return null;

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      editProductFormik.setFieldValue('image', file);
      setFileName(file.name);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      editProductFormik.setFieldValue('image', file);
      setFileName(file.name);
    }
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`}>
      <div className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-md mx-4 sm:mx-8 lg:mx-16 xl:mx-32 2xl:mx-64">
        <div className="flex justify-between items-center pb-3">
          <div className="flex-1 text-center">
            <h2 className="text-xl font-semibold">Editar Producto</h2>
          </div>
          <button onClick={toggle} className="text-gray-500 hover:text-gray-700">
            <IoClose className='text-3xl' />
          </button>
        </div>

        <form onSubmit={editProductFormik.handleSubmit} className="space-y-2 mt-4">
          <div>
            <label htmlFor="id" className="block text-sm font-medium text-gray-700">
              ID
            </label>
            <input
              id="id"
              name="id"
              type="text"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={editProductFormik.values.id}
              disabled
              readOnly
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Categoría
            </label>
            <select
              id="category"
              name="category"
              className="block w-full mt-1 p-2.5 border border-gray-300 rounded-md"
              value={editProductFormik.values.category.id}
              onChange={editProductFormik.handleChange}
              onBlur={editProductFormik.handleBlur}
            >
              <option value="">Selecciona una categoría</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {editProductFormik.touched.category && editProductFormik.errors.category && (
              <span className="text-red-500 text-sm">{editProductFormik.errors.category.name}</span>
            )}
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              placeholder="Ingresa el Nombre del producto"
              type="text"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={editProductFormik.values.name}
              onChange={editProductFormik.handleChange}
              onBlur={editProductFormik.handleBlur}
            />
            {editProductFormik.touched.name && editProductFormik.errors.name && (
              <span className="text-red-500 text-sm">{editProductFormik.errors.name}</span>
            )}
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Precio
            </label>
            <input
              id="price"
              name="price"
              placeholder="Ingresa el Precio del producto"
              type="number"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={editProductFormik.values.price}
              onChange={editProductFormik.handleChange}
              onBlur={editProductFormik.handleBlur}
            />
            {editProductFormik.touched.price && editProductFormik.errors.price && (
              <span className="text-red-500 text-sm">{editProductFormik.errors.price}</span>
            )}
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Cantidad
            </label>
            <input
              id="quantity"
              name="quantity"
              placeholder="Ingresa la cantidad en stock"
              type="number"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={editProductFormik.values.quantity}
              onChange={editProductFormik.handleChange}
              onBlur={editProductFormik.handleBlur}
            />
            {editProductFormik.touched.quantity && editProductFormik.errors.quantity && (
              <span className="text-red-500 text-sm">{editProductFormik.errors.quantity}</span>
            )}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Ingresa una descripción del producto"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-md"
              value={editProductFormik.values.description}
              onChange={editProductFormik.handleChange}
              onBlur={editProductFormik.handleBlur}
            />
            {editProductFormik.touched.description && editProductFormik.errors.description && (
              <span className="text-red-500 text-sm">{editProductFormik.errors.description}</span>
            )}
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
              Imagen
            </label>
            <div
              className="mt-1 relative w-full border border-gray-300 rounded-md flex items-center p-2 bg-gray-50"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              <span className="text-gray-500">
                {typeof fileName === 'string' ? fileName : 'Arrastra o selecciona la imagen a mostrar'}
              </span>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 w-full cursor-pointer"
                onChange={handleImageChange}
              />
              <button
                type="button"
                className="bg-gray-400 hover:bg-gray-400 text-white text-sm border border-gray-500 py-1 px-2 rounded-lg ml-auto"
                onClick={() => document.getElementById('image')?.click()}
              >
                Seleccionar archivo
              </button>
            </div>
            {editProductFormik.touched.image && editProductFormik.errors.image && (
              <span className="text-red-500 text-sm">{editProductFormik.errors.image}</span>
            )}
          </div>

          <div className="mt-6 space-y-2">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary border border-secondary text-white rounded-md hover:bg-secondary"
              disabled={editProductFormik.isSubmitting}
            >
              Guardar Cambios
            </button>
            <button
              type="button"
              className="w-full py-2 px-4 bg-background border text-black rounded-md"
              onClick={toggle}
              disabled={editProductFormik.isSubmitting}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;