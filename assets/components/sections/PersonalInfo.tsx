import type { FunctionComponent } from 'react';

// Component Import
import Section from '@components/Section';
import { Button, FormInput } from '@components/ui';

// React Hook Form
import { FormProvider, useForm, useFieldArray } from 'react-hook-form';

const PersonalInfo: FunctionComponent = () => {
    const methods = useForm();

    const { fields, append, prepend, remove, swap, move, insert } =
        useFieldArray({
            control: methods.control, // control props comes from useForm (optional: if you are using FormContext)
            name: 'link', // unique name for your Field Array
        });

    const onSubmit = (data: any) => console.log(data);

    return (
        <Section title="Resume Header">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <FormInput label="Name" name="name" />
                    <FormInput
                        label="Email"
                        name="email"
                        props={{ type: 'email' }}
                    />
                    <FormInput label="Location" name="address" />
                    {fields.map((field, index) => (
                        <FormInput
                            key={field.id}
                            label={`Link ${index + 1}`}
                            name={`link.${index}.value`}
                        />
                    ))}
                    <button
                        className="text__body-2 button-create-link"
                        onClick={() => append({})}
                    >
                        Add Link
                    </button>
                    <Button>Save</Button>
                </form>
            </FormProvider>
        </Section>
    );
};

export default PersonalInfo;
