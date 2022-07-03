import type { FunctionComponent } from 'react';

// React Hook Form
import { useFieldArray } from 'react-hook-form';
import type { Control, FieldValues, UseFormRegister } from 'react-hook-form';

// MUI Import
import { Grid, TextField, Chip, Button } from '@mui/material';

const EducationSubsection: FunctionComponent<EducationSubsectionProps> = ({
    control,
    nestedIndex,
    register,
    removeSchool,
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
                        helperText="Ex: Honors and Awards"
                        variant="standard"
                        {...register(
                            `education[${nestedIndex}].subsection[${index}].title`
                        )}
                    />
                    <TextField
                        sx={{ width: '100%' }}
                        label="Subsection Content"
                        helperText="Ex: University Scholar, DOST-SEI Undergraduate Scholar"
                        variant="standard"
                        {...register(
                            `education[${nestedIndex}].subsection[${index}].content`
                        )}
                    />
                    <Chip
                        label="Remove Subsection"
                        color="default"
                        sx={{ my: 2 }}
                        onClick={() => remove(index)}
                    />
                </Grid>
            ))}
            <Grid>
                <Button
                    variant="text"
                    sx={{ px: 2, my: 1 }}
                    onClick={() => append({})}
                >
                    Add Subsection
                </Button>
                <Button color="error" onClick={removeSchool}>
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
}
