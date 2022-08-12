import { ChessExperience, PersonalInformation } from 'types';

export const storeFieldsInLocalStorage = (
  value: string,
  key: keyof PersonalInformation | keyof ChessExperience
) => {
  const fields = localStorage.getItem('fields');
  let newFields: {
    [key: string]: any;
  } = {};
  if (fields) {
    newFields = {
      ...JSON.parse(localStorage.getItem('fields') as string),
    };
  }
  newFields[key] = value;
  localStorage.setItem('fields', JSON.stringify(newFields));
};
