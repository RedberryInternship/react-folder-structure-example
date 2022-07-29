import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { chessExperienceValidationSchema } from 'schemas';
import { getRegisterRequest } from 'services';
import { ChessExperience, Merge, PersonalInformation } from 'types';
import { getFormInitialValue } from './helpers';

export const useChessExperienceForm = () => {
  const navigate = useNavigate();
  const formik = useFormik<ChessExperience>({
    initialValues: getFormInitialValue(),
    validationSchema: chessExperienceValidationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
    onSubmit: async (data) => {
      const fields = localStorage.getItem('fields');
      if (fields) {
        const fieldsObject: Merge<PersonalInformation, ChessExperience> =
          JSON.parse(fields as string);
        try {
          await getRegisterRequest({
            ...fieldsObject,
            already_participated: Boolean(data.already_participated),
          });
          localStorage.removeItem('fields');
          navigate('/submitted');
        } catch (error) {
          toast('unexpected error occurred', {
            type: 'error',
            theme: 'dark',
          });
        }
      } else {
        toast('unexpected error occurred', {
          type: 'error',
          theme: 'dark',
        });
      }
    },
  });

  useEffect(() => {
    if (formik.errors) {
      toast(
        formik.errors[Object.keys(formik.errors)[0] as keyof ChessExperience],
        {
          theme: 'dark',
          type: 'error',
        }
      );
    }
  }, [formik.errors]);

  return {
    formik,
  };
};
