import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createItem } from '../services/api';

const ItemForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    price: Yup.number().required('Required').positive('Must be positive'),
  });

  return (
    <Formik
      initialValues={{ name: '', price: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        await createItem(values);
        resetForm();
      }}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <Field name="price" type="number" />
            <ErrorMessage name="price" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default ItemForm;
