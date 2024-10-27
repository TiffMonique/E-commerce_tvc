import React from "react";
import { FormikProps } from "formik";
import { AddProductProps } from "../interfaces/addProduct";


interface ImageUploadProps {
  addProductFormik: FormikProps<AddProductProps>;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ addProductFormik }) => {
  const handleDrop = (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      addProductFormik.setFieldValue('image', event.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="mt-1 flex items-center border border-gray-300 rounded-md"
    >
      <input
        type="text"
        placeholder="Arrastra o selecciona la imagen a mostrar"
        className="flex-grow px-3 py-2 border-0 text-gray-500 focus:outline-none focus:ring-0"
        disabled
      />
      <label
        htmlFor="image"
        className="px-3 py-2 bg-gray-200 text-gray-700 cursor-pointer rounded-r-md hover:bg-gray-300 text-sm"
      >
        Seleccionar archivo
      </label>
      <input
        id="image"
        name="image"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => addProductFormik.setFieldValue('image', e.target.files ? e.target.files[0] : null)}
        onBlur={addProductFormik.handleBlur}
      />
    </div>
  );
};

export default ImageUpload;
