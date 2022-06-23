import type { FunctionComponent } from 'react';

// Component Import
import Section from '@components/Section';
import { Button, FormInput } from '@components/ui';

// React Hook Form
import { FormProvider, useForm } from 'react-hook-form';

const PersonalInfo: FunctionComponent = () => {
    const methods = useForm();

    const onSubmit = (data: any) => console.log(data);

    return (
        <Section title="Personal Information">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <FormInput label="Name" name="name" />
                    <FormInput
                        label="Email"
                        name="email"
                        props={{ type: 'email' }}
                    />
                    <FormInput label="Location" name="address" />
                    <Button>Save</Button>
                </form>
            </FormProvider>
        </Section>
    );
};

export default PersonalInfo;
