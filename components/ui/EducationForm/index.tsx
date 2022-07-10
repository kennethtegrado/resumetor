import { Fragment, FunctionComponent } from 'react';

import { SaveButton } from '@components/ui';
import EducationFormSubsection from '../EducationFormSubsection';

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
import {
    useForm,
    useFieldArray,
    SubmitHandler,
    FieldValues,
} from 'react-hook-form';

// Resolver
import { educationResolver } from '@schema';
import { sortArrayData } from '@utils';

// Atom Import
import { viewSectionContentState, sectionContentState } from '@atom';
import { useSetRecoilState, useRecoilState } from 'recoil';

const EducationForm: FunctionComponent = () => {
    const [viewSectionContent, setViewSectionContent] = useRecoilState(
        viewSectionContentState
    );
    const setSectionContentState = useSetRecoilState(sectionContentState);

    // useForm
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

    if (viewSectionContent) return null;

    const submitHandler: SubmitHandler<FieldValues> = async (data) => {
        const sortedData = await sortArrayData(data.education, 'startYear');

        setSectionContentState(sortedData);
        setViewSectionContent(true);
    };

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
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
                                            !!errors?.education?.[index]?.school
                                        }
                                        helperText={
                                            errors?.education?.[index]?.school
                                                ?.message ||
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
                                            errors?.education?.[index]?.location
                                                ?.message ||
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
                                            !!errors?.education?.[index]?.degree
                                        }
                                        helperText={
                                            errors?.education?.[index]?.degree
                                                ?.message ||
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
                                            errors?.education?.[index]?.endYear
                                                ?.message || 'Ex: 2025'
                                        }
                                    />
                                </Grid>
                                <EducationFormSubsection
                                    nestedIndex={index}
                                    {...{ control, register }}
                                    removeSchool={() => remove(index)}
                                    errors={
                                        errors?.education?.[index]?.subsection
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
                onClick={() => append({ school: '', location: '', date: '' })}
            >
                Add School
            </Button>
            <SaveButton />
        </form>
    );
};
export default EducationForm;
