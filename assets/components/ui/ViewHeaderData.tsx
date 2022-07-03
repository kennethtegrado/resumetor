import { FunctionComponent } from 'react';

// MUI Import
import { Badge, Button, Grid, Link, Typography } from '@mui/material';

// Interface Import
import { PersonalFields } from '@interface/reactHookForm';

// Component Import
import { GoPencil } from 'react-icons/go';
import EditButton from './EditButton';

const ViewData: FunctionComponent<ViewDataProps> = ({ data, toggleEdit }) => {
    return (
        <>
            <Grid container spacing={3} sx={{ mb: 2 }}>
                {data.map(({ key, value }, index: number) => (
                    <Grid item key={index} xs={12} md={6}>
                        <Badge
                            badgeContent={key}
                            color="primary"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            sx={{ pt: 2, textTransform: 'capitalize' }}
                        >
                            {typeof value === 'string' ? (
                                <Typography variant="body1">{value}</Typography>
                            ) : (
                                <Link
                                    href={value.url}
                                    sx={{ textTransform: 'lowercase' }}
                                >
                                    {value.shorthand}
                                </Link>
                            )}
                        </Badge>
                    </Grid>
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
