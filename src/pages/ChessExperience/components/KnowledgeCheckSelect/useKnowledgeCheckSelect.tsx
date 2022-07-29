import { FormikHandlers } from 'formik';
import { storeFieldsInLocalStorage } from 'helpers';
import { ChangeEvent, useRef } from 'react';

export const useKnowledgeCheckSelect = (
  handleChange: FormikHandlers['handleChange']
) => {
  const togglerRef = useRef<HTMLDivElement>(null);
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    storeFieldsInLocalStorage(e.currentTarget.value, 'experience_level');
    togglerRef.current?.blur();
  };

  return {
    changeHandler,
    togglerRef,
  };
};
