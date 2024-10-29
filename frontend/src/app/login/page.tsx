'use client'
import React from 'react';
import useSigninForm from '../hooks/useSigninForm';

const Signin: React.FC = () => {
  const formik = useSigninForm();


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Iniciar Sesión</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="user" className="block text-sm font-medium text-gray-700">
              Usuario
            </label>
            <input
              type="text"
              id="user"
              name="user"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${formik.touched.user && formik.errors.user ? 'border-red-500' : 'border-gray-300'
                }`}
              placeholder="Ingrese su email"
            />
            {formik.touched.user && formik.errors.user ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.user}</p>
            ) : null}

          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
              placeholder="Ingrese su contraseña"
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-primary hover:bg-secondary rounded-md shadow"
          >
            Iniciar Sesión
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-6">
          ¿Necesitas crear una cuenta?{' '}
          <a href="#" className="text-secondary font-medium hover:underline">
            Crear cuenta
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
