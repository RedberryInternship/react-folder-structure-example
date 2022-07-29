export const getFormInitialValue = () => {
  let name = '';
  let phone = '';
  let email = '';
  let date_of_birth = '';
  const fields = localStorage.getItem('fields');
  if (fields) {
    const fieldsObject = JSON.parse(localStorage.getItem('fields') as string);
    name = fieldsObject!.name ?? '';
    phone = fieldsObject!.phone ?? '';
    email = fieldsObject!.email ?? '';
    date_of_birth = fieldsObject!.date_of_birth ?? '';
  }
  return {
    name,
    phone,
    email,
    date_of_birth,
  };
};
