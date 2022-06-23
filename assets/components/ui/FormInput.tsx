import type { FunctionComponent, PropsWithoutRef } from 'react';

// React Hook Form
import { useFormContext } from 'react-hook-form';

const FormInput: FunctionComponent<FormInputProps> = ({
    label,
    name,
    ...props
}) => {
    // Useform Context
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <>
            <label
                htmlFor={name}
                className="input-component__label text__subtitle-2"
            >
                {label}
            </label>
            <input className="input-component" {...register(name)} {...props} />
            <p className="input-component__helper text__caption">
                {errors?.[name]?.message}
            </p>
        </>
    );
};

export default FormInput;

interface FormInputProps {
    label: string;
    name: string;
    props?: any;
}
