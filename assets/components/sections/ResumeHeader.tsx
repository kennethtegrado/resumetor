import type { FunctionComponent } from 'react';

import { useState, useEffect } from 'react';

// Component Import
import Section from '@components/Section';
import { ViewHeaderData, SaveButton } from '@components/ui';

// MUI Import
import {
    Box,
    Grid,
    IconButton,
    Button,
    TextField,
    Snackbar,
    Alert,
} from '@mui/material';

// Icon Import
import { TiDelete } from 'react-icons/ti';

// React Hook Form
import { useForm, useFieldArray } from 'react-hook-form';

// Resolver
import { resumeHeaderResolver } from '@schema';

// Utils Import
import { makeArrayHeaderData } from '@utils';

// Interface Import
import { ResumeHeaderValues, PersonalFields } from '@interface/reactHookForm';

const PersonalInfo: FunctionComponent = () => {
    // States
    const [viewData, setViewData] = useState(false);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [personalData, setPersonalData] = useState<Array<PersonalFields>>([
        { key: 'name', value: 'hello' },
    ]);

    // UseForm
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<ResumeHeaderValues>({ resolver: resumeHeaderResolver });

    // UseField Array
    const { fields, append, remove } = useFieldArray({
        control: control, // control props comes from useForm (optional: if you are using FormContext)
        name: 'link', // unique name for your Field Array
    });

    const onSubmit = async (data: any) => {
        const dataArray = await makeArrayHeaderData(data);
        setPersonalData(dataArray);
    };

    useEffect(() => {
        if (personalData.length > 1) {
            setViewData(true);
            setShowSnackbar(true);
        }
    }, [personalData]);

    const toggleEdit = () => {
        setViewData(false);
    };

    return (
        <Section title="Resume Header">
            {!viewData && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={3} sx={{ mb: 2 }}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Name"
                                {...register('name')}
                                error={errors?.name ? true : false}
                                helperText={
                                    errors?.name?.message || 'Ex: John Smith.'
                                }
                                sx={{ width: '100%' }}
                                variant={'standard'}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Job Position"
                                {...register('job Position')}
                                error={errors?.['job Position'] ? true : false}
                                helperText={
                                    errors?.['job Position']?.message ||
                                    'Ex: Software Engineer.'
                                }
                                sx={{ width: '100%' }}
                                variant={'standard'}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Email Address"
                                {...register('email')}
                                error={errors?.email ? true : false}
                                helperText={
                                    errors?.email?.message ||
                                    'Ex: name@email.com'
                                }
                                sx={{ width: '100%' }}
                                variant={'standard'}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Mobile Number"
                                {...register('number')}
                                error={errors?.number ? true : false}
                                helperText={
                                    errors?.number?.message ||
                                    'Ex: 09123456789.'
                                }
                                sx={{ width: '100%' }}
                                variant={'standard'}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Location"
                                {...register('location')}
                                error={errors?.location ? true : false}
                                helperText={
                                    errors?.location?.message ||
                                    'Ex: San Francisco, California.'
                                }
                                sx={{ width: '100%' }}
                                variant={'standard'}
                            />
                        </Grid>
                        {fields.map((item, index) => (
                            <Grid item xs={12} md={6} key={item.id}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                    }}
                                >
                                    <TextField
                                        label="Link"
                                        {...register(`link.${index}.link`)}
                                        error={
                                            errors?.link?.[index]?.link
                                                ? true
                                                : false
                                        }
                                        helperText={
                                            errors?.link?.[index]?.link
                                                ?.message ||
                                            'Ex: www.kennethtegrado.tech.'
                                        }
                                        sx={{ width: '100%' }}
                                        variant={'standard'}
                                    />
                                    <IconButton
                                        color="error"
                                        onClick={() => remove(index)}
                                    >
                                        <TiDelete />
                                    </IconButton>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    <Button
                        variant="text"
                        onClick={() => append({ link: '' })}
                        sx={{ display: 'block', mb: 2 }}
                        color="secondary"
                    >
                        Add Link
                    </Button>
                    <SaveButton />
                </form>
            )}
            {viewData && (
                <ViewHeaderData data={personalData} toggleEdit={toggleEdit} />
            )}
            <Snackbar
                open={showSnackbar}
                autoHideDuration={6000}
                onClose={() => setShowSnackbar(false)}
            >
                <Alert
                    severity="success"
                    sx={{ width: '100%' }}
                    onClose={() => setShowSnackbar(false)}
                >
                    Successfully saved resume header!
                </Alert>
            </Snackbar>
        </Section>
    );
};

export default PersonalInfo;
