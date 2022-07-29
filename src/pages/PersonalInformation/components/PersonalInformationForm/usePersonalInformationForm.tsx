import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { personalInformationValidationSchema } from 'schemas';
import { PersonalInformation } from 'types';
import { getFormInitialValue } from './helpers';

export const usePersonalInformationForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: getFormInitialValue(),
    onSubmit: () => {
      navigate('/chess-experience');
    },
    validationSchema: personalInformationValidationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
  });

  useEffect(() => {
    if (formik.errors) {
      toast(
        formik.errors[
          Object.keys(formik.errors)[0] as keyof PersonalInformation
        ],
        {
          theme: 'dark',
          type: 'error',
        }
      );
    }
  }, [formik.errors]);

  return { formik };
};
