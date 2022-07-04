import { FunctionComponent } from 'react';

// React Import
import { Fragment } from 'react';

// MUI Import
import { Grid, Link, Typography } from '@mui/material';

// Interface Import
import { PersonalFields } from '@interface/reactHookForm';

// Component Import
import EditButton from './EditButton';

const ViewData: FunctionComponent<ViewDataProps> = ({ data, toggleEdit }) => {
    return (
        <>
            <Grid container spacing={2} sx={{ mb: 2 }}>
                {data.map(({ key, value }, index: number) => (
                    <Fragment key={index}>
                        {key === 'name' ? (
                            <Grid item xs={12}>
                                <Typography
                                    variant="h4"
                                    sx={{ display: 'block' }}
                                >
                                    {value as string}
                                </Typography>
                            </Grid>
                        ) : key === 'job Position' ? (
                            <Grid item xs={12}>
                                <Typography
                                    variant="h5"
                                    sx={{ display: 'block' }}
                                >
                                    {value as string}
                                </Typography>
                            </Grid>
                        ) : (
                            <Grid
                                item
                                key={index}
                                xs={12}
                                md={6}
                                sx={{
                                    textAlign:
                                        index % 2 !== 0 ? 'right' : 'left',
                                    width: '100%',
                                }}
                            >
                                {typeof value === 'string' ? (
                                    <Typography variant="body2">
                                        {value}
                                    </Typography>
                                ) : (
                                    <Link
                                        href={value.url}
                                        sx={{ textTransform: 'lowercase' }}
                                    >
                                        {value.shorthand}
                                    </Link>
                                )}
                            </Grid>
                        )}
                    </Fragment>
                ))}
            </Grid>
            <EditButton edit={toggleEdit} />
        </>
    );
};

export default ViewData;

interface ViewDataProps {
    data: PersonalFields[];
    toggleEdit: () => void;
}
