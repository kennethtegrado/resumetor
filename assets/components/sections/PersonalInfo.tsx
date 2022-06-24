import type { FunctionComponent } from 'react';

import { useState } from 'react';

// Component Import
import Section from '@components/Section';
import { Button, FormInput, ViewData } from '@components/ui';

// React Hook Form
import { FormProvider, useForm, useFieldArray } from 'react-hook-form';
import { makeArray } from '@utils';

const PersonalInfo: FunctionComponent = () => {
    const [viewData, setViewData] = useState(false);
    const [personalData, setPersonalData] = useState({});
    const methods = useForm();

    const { fields, append, remove } = useFieldArray({
        control: methods.control, // control props comes from useForm (optional: if you are using FormContext)
        name: 'link', // unique name for your Field Array
    });

    const onSubmit = async (data: any) => {
        const dataArray = await makeArray(data);
        setViewData(true);
        setPersonalData(dataArray);
    };

    return (
        <Section title="Resume Header">
            {!viewData && (
                <FormProvider {...methods}>
                    <form
                        onSubmit={methods.handleSubmit(onSubmit)}
                        className="section__form"
                    >
                        <FormInput
                            label="Name"
                            name="name"
                            required
                            error={
                                methods.formState.errors?.name
                                    ? 'Put a name so employers will know who you are.'
                                    : ''
                            }
                        />
                        <FormInput
                            label="Email"
                            name="email"
                            props={{ type: 'email' }}
                            required
                            pattern={
                                '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$'
                            }
                            error={
                                methods.formState.errors?.email
                                    ? 'Put a valid email so employers will know how to contact you.'
                                    : ''
                            }
                        />
                        <FormInput label="Number" name="number" />
                        <FormInput
                            label="Location"
                            name="address"
                            required
                            error={
                                methods.formState.errors?.address
                                    ? 'Put a location so employers will know if you are near.'
                                    : ''
                            }
                        />
                        {fields.map((field, index) => (
                            <FormInput
                                key={field.id}
                                label={`Link ${index + 1}`}
                                name={`link.${index}.link`}
                                remove={() => remove(index)}
                                required
                                error={
                                    methods.formState.errors?.link?.[index]
                                        ?.link
                                        ? 'Put a valid link for your contacts.'
                                        : ''
                                }
                            />
                        ))}
                        <button
                            className="text__body-2 button-create-link"
                            onClick={() => append({})}
                            type="button"
                        >
                            Add Link
                        </button>
                        <Button>Save</Button>
                    </form>
                </FormProvider>
            )}
            {viewData && <ViewData data={personalData} />}
        </Section>
    );
};

export default PersonalInfo;
