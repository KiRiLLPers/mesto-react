import { useState, useCallback } from "react";

const useForm = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isInputValid, setisInputValid] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChangeInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const errorsMessages = e.target.validationMessage;
    const valid = e.target.validity.valid;
    const form = e.target.form;

    setValues((values) => {
      return { ...values, [name]: value };
    });

    setErrors((errors) => {
      return { ...errors, [name]: errorsMessages };
    });

    setisInputValid((validInputs) => {
      return { ...valid, [name]: valid };
    });

    setIsValid(form.checkValidity());
  };

  const resetForm = useCallback((e) => {
    setValues({});
    setErrors({});
    setisInputValid({});
    setIsValid(false);
  }, []);

  return { values, errors, isInputValid, isValid, handleChangeInput, resetForm };
};

export default useForm;
