import { Fragment, FunctionComponent } from 'react';

// Component Import
import Section from '@components/Section';
import { SaveButton } from '@components/ui';
import EducationSubsection from './EducationSubsection';

// MUI Import
import { Box, Button, Chip, Divider, Grid, TextField } from '@mui/material';

// React Hook Form
import { useForm, useFieldArray } from 'react-hook-form';

const EducationSection: FunctionComponent = () => {
    // School Section
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    // useFieldArray
    const { append, fields, remove } = useFieldArray({
        control,
        name: 'education',
    });

    const submitEducationForm = (data: any) => console.log(data);

    return (
        <Section title="Education" editableTitle type="education">
            <form onSubmit={handleSubmit(submitEducationForm)}>
                {fields.map((item, index) => {
                    return (
                        <Fragment key={item.id}>
                            <Box sx={{ my: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            label="School"
                                            helperText={
                                                'Ex: University of the Philippines - Los Baños'
                                            }
                                            variant="standard"
                                            sx={{ width: '100%' }}
                                            {...register(
                                                `education[${index}].school`
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            label="Location"
                                            helperText={'Ex: Los Baños. Laguna'}
                                            variant="standard"
                                            sx={{ width: '100%' }}
                                            {...register(
                                                `education[${index}].location`
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            label="Starting Year"
                                            helperText={'Ex: 2021'}
                                            variant="standard"
                                            sx={{ width: '100%' }}
                                            {...register(
                                                `education[${index}].startYear`
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            label="End Year"
                                            helperText={'Ex: 2025'}
                                            variant="standard"
                                            sx={{ width: '100%' }}
                                            {...register(
                                                `education[${index}].endYear`
                                            )}
                                        />
                                    </Grid>
                                    <EducationSubsection
                                        nestedIndex={index}
                                        {...{ control, register }}
                                        removeSchool={() => remove(index)}
                                    />
                                </Grid>
                            </Box>
                            <Divider />
                        </Fragment>
                    );
                })}
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
        </Section>
    );
};
export default EducationSection;
