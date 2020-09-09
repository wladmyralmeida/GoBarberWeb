import { ValidationError } from "yup";

// Tornar o erro genérico!
interface Erros {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Erros {
  const validationErrors: Erros = {};

  err.inner.forEach(error => {
      validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
