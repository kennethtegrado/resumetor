import type { FunctionComponent } from 'react';

// React Hook Form
import { useFieldArray } from 'react-hook-form';
import type { Control, FieldValues, UseFormRegister } from 'react-hook-form';

// MUI Import
import { Grid, TextField, Chip, Button } from '@mui/material';
import { string } from 'yup';

const EducationSubsection: FunctionComponent<EducationSubsectionProps> = ({
    control,
    nestedIndex,
    register,
    removeSchool,
    errors,
}) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: `education[${nestedIndex}].subsection`,
    });
    return (
        <>
            {fields.map((item, index) => (
                <Grid item xs={12} key={item.id}>
                    <TextField
                        sx={{ display: 'block' }}
                        label="Subsection Title"
                        variant="standard"
                        {...register(
                            `education[${nestedIndex}].subsection[${index}].title`
                        )}
                        error={!!errors?.[index]?.title}
                        helperText={
                            errors?.[index]?.title?.message ||
                            'Ex: Honors and Awards'
                        }
                    />
                    <TextField
                        sx={{ width: '100%' }}
                        label="Subsection Content"
                        variant="standard"
                        {...register(
                            `education[${nestedIndex}].subsection[${index}].content`
                        )}
                        error={!!errors?.[index]?.content}
                        helperText={
                            errors?.[index]?.content?.message ||
                            'Ex: University Scholar, DOST-SEI Undergraduate Scholar'
                        }
                    />
                    <Chip
                        label="Remove Subsection"
                        color="default"
                        sx={{ my: 2 }}
                        onClick={() => remove(index)}
                    />
                </Grid>
            ))}
            <Grid item xs={12}>
                <Button
                    variant="text"
                    sx={{ px: 2, my: 1 }}
                    onClick={() => append({})}
                >
                    Add Subsection
                </Button>
                <Button
                    color="error"
                    onClick={removeSchool}
                    sx={{ px: 2, my: 1 }}
                >
                    Remove School
                </Button>
            </Grid>
        </>
    );
};

export default EducationSubsection;

interface EducationSubsectionProps {
    nestedIndex: number;
    control: Control<FieldValues | any>;
    register: UseFormRegister<FieldValues>;
    removeSchool: () => void;
    errors?: {
        title?: undefined | { message: string };
        content?: undefined | { message: string };
    }[];
}
