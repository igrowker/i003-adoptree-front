export const validateForm = (fieldName: string, value: string) => {
  let error = '';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  switch (fieldName) {
    case 'name':
      if (!value.trim()) {
        error = 'Full name is required';
      }
      break;

    case 'email':
      if (!value.trim()) {
        console.log(value);
        error = 'Email is required';
      } else if (!emailRegex.test(value)) {
        error = 'Invalid email address';
      }
      break;

    case 'password':
      if (!value.trim()) {
        error = 'Password is required';
      } else if (!passwordRegex.test(value)) {
        error =
          'The password must be at least 8 characters long and contain at least one letter and one digit.';
      }
      break;

    case 'adress':
      if (!value) {
        error = 'Adress is required';
      }
      break;

    case 'phone':
      if (!value.trim()) {
        error = 'Phone is required';
      }
      break;

    default:
      break;
  }
  return error;
};
