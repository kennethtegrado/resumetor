import { Fragment, FunctionComponent } from 'react';

// React
import { useState } from 'react';

// Component Import
import Section from '@components/Section';
import { SaveButton, ViewEducationData } from '@components/ui';
import EducationSubsection from './EducationSubsection';

// MUI Import
import {
    Box,
    Button,
    Divider,
    Grid,
    TextField,
    Typography,
} from '@mui/material';

// React Hook Form
import { useForm, useFieldArray } from 'react-hook-form';
import type { SubmitHandler, FieldValues } from 'react-hook-form';

// Resolver
import { educationResolver } from 'schema';

// Utils function
import { sortArrayEducationData } from '@utils';

// Interface Import
import { SchoolSectionValues } from 'interface/reactHookForm';

const EducationSection: FunctionComponent = () => {
    // States
    const [viewData, setViewData] = useState<boolean>(false);
    const [educationData, setEducationData] = useState<SchoolSectionValues[]>();

    // School Section
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({ resolver: educationResolver });

    // useFieldArray
    const { append, fields, remove } = useFieldArray({
        control,
        name: 'education',
    });

    // Submit Handler for React Hook Form handleSubmit
    const submitEducationForm: SubmitHandler<FieldValues> = async (
        data: FieldValues
    ): Promise<void> => {
        await sortArrayEducationData(data.education);
        setEducationData(data.education as SchoolSectionValues[]);
        setViewData(true);
    };

    return (
        <Section title="Education" editableTitle type="education">
            {!viewData && (
                <form onSubmit={handleSubmit(submitEducationForm)}>
                    {fields.map((item, index) => {
                        return (
                            <Fragment key={item.id}>
                                <Box sx={{ my: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                label="School"
                                                variant="standard"
                                                sx={{ width: '100%' }}
                                                {...register(
                                                    `education[${index}].school`
                                                )}
                                                error={
                                                    !!errors?.education?.[index]
                                                        ?.school
                                                }
                                                helperText={
                                                    errors?.education?.[index]
                                                        ?.school?.message ||
                                                    'Ex: University of the Philippines - Los Baños'
                                                }
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                label="Location"
                                                variant="standard"
                                                sx={{ width: '100%' }}
                                                {...register(
                                                    `education[${index}].location`
                                                )}
                                                error={
                                                    !!errors?.education?.[index]
                                                        ?.location
                                                }
                                                helperText={
                                                    errors?.education?.[index]
                                                        ?.location?.message ||
                                                    'Ex: Los Baños. Laguna'
                                                }
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                label="Degree"
                                                variant="standard"
                                                sx={{ width: '100%' }}
                                                {...register(
                                                    `education[${index}].degree`
                                                )}
                                                error={
                                                    !!errors?.education?.[index]
                                                        ?.degree
                                                }
                                                helperText={
                                                    errors?.education?.[index]
                                                        ?.degree?.message ||
                                                    'Ex: Bachelor of Science in Computer Science'
                                                }
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                label="Starting Year"
                                                type="string"
                                                variant="standard"
                                                sx={{ width: '100%' }}
                                                {...register(
                                                    `education[${index}].startYear`
                                                )}
                                                error={
                                                    !!errors?.education?.[index]
                                                        ?.startYear
                                                }
                                                helperText={
                                                    errors?.education?.[index]
                                                        ?.startYear?.message ||
                                                    'Ex: 2021'
                                                }
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextField
                                                label="Graduation Year"
                                                variant="standard"
                                                type="string"
                                                sx={{ width: '100%' }}
                                                {...register(
                                                    `education[${index}].endYear`
                                                )}
                                                error={
                                                    !!errors?.education?.[index]
                                                        ?.endYear
                                                }
                                                helperText={
                                                    errors?.education?.[index]
                                                        ?.endYear?.message ||
                                                    'Ex: 2025'
                                                }
                                            />
                                        </Grid>
                                        <EducationSubsection
                                            nestedIndex={index}
                                            {...{ control, register }}
                                            removeSchool={() => remove(index)}
                                            errors={
                                                errors?.education?.[index]
                                                    ?.subsection
                                            }
                                        />
                                    </Grid>
                                </Box>
                                <Divider />
                            </Fragment>
                        );
                    })}
                    <Typography variant="subtitle2" color="error">
                        {errors?.education?.message}
                    </Typography>
                    <Button
                        variant="outlined"
                        sx={{ mr: 2, my: 2 }}
                        onClick={() =>
                            append({ school: '', location: '', date: '' })
                        }
                    >
                        Add School
                    </Button>
                    <SaveButton />
                </form>
            )}
            {viewData && (
                <ViewEducationData
                    data={educationData as SchoolSectionValues[]}
                    edit={() => setViewData(false)}
                />
            )}
        </Section>
    );
};
export default EducationSection;
