import { useForm } from "vee-validate";

export const formValidations = (validationSchema) => {
    const { errors, handleSubmit, defineField, resetForm , setErrors} = useForm({
        validationSchema: validationSchema,
    });

    return {
        errors,
        handleSubmit,
        defineField,
        resetForm,
        setErrors
    }
}

