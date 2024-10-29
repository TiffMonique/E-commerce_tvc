// hooks/useSigninForm.ts
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const useSigninForm = () => {
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Ingrese un email válido")
      .required("El email es requerido"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .required("La contraseña es requerida"),
  });

  const formik = useFormik({
    initialValues: {
      user: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      setSubmitting(true);
      const res = await signIn("credentials", {
        user: values.user,
        password: values.password,
        redirect: false,
      });

      if (res?.error) {
        setFieldError('password', res.error);
      }

      if (res?.ok) {
        router.push("/admin");
      }

      setSubmitting(false);
    },
  });

  return formik;
};

export default useSigninForm;
