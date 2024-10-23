import * as Yup from 'yup';

export const productSchema = Yup.object().shape({
    id: Yup.number()
        .required('El ID es obligatorio'),
    name: Yup.string()
        .required('El nombre es obligatorio')
        .min(2, 'El nombre debe tener al menos 2 caracteres')
        .max(100, 'El nombre no puede superar los 100 caracteres'),
    category: Yup.string()
        .required('La categoría es obligatoria'),
    price: Yup.number()
        .required('El precio es obligatorio')
        .min(0, 'El precio no puede ser negativo'),
    quantity: Yup.number()
        .required('La cantidad es obligatoria')
        .min(0, 'La cantidad no puede ser negativa'),
    description: Yup.string()
        .optional() // Puede no ser requerido
        .max(500, 'La descripción no puede superar los 500 caracteres'),
    image: Yup.string()
        .url('La URL de la imagen no es válida') // Asegura que sea una URL válida
        .optional() // Puede no ser requerido
});
