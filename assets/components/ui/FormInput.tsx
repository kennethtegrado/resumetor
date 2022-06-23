import type { FunctionComponent } from 'react';

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
                className="section__change-title-label text__subtitle-2"
            >
                {label}
            </label>
            <input
                type="text"
                className="section__change-title"
                {...register(name)}
                {...props}
            />
            <p className="section__change-title-error text__caption">
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
