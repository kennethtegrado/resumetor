import type { FunctionComponent, PropsWithoutRef } from 'react';

// React Hook Form
import { useFormContext } from 'react-hook-form';

// Icon Import
import { MdDelete } from 'react-icons/md';

const FormInput: FunctionComponent<FormInputProps> = ({
    label,
    name,
    error = '',
    remove,
    ...props
}) => {
    // Useform Context
    const { register } = useFormContext();

    return (
        <>
            <label
                htmlFor={name}
                className="input-component__label text__subtitle-2"
            >
                {label}{' '}
                {remove && (
                    <span className="deletable__icon" onClick={remove}>
                        <MdDelete className="deletable__svg" />
                    </span>
                )}
            </label>
            <br />
            <input className="input-component" {...register(name)} {...props} />
            <p className="input-component__helper text__caption">{error}</p>
        </>
    );
};

export default FormInput;

interface FormInputProps {
    label: string;
    name: string;
    error?: string;
    props?: any;
    remove?: () => void;
}
