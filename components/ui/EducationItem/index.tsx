import type { FunctionComponent } from 'react';
import type { SchoolSectionValues } from '@interface/reactHookForm';

// MUI import
import { Stack, Typography, Grid } from '@mui/material';

const EducationItem: FunctionComponent<EducationItemProps> = ({ item }) => {
    return (
        <Grid item xs={12}>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {item.school}
                </Typography>
                <Typography variant="body2">{item.location}</Typography>
            </Stack>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    {item.degree}
                </Typography>
                <Typography variant="body2">
                    {item.startYear}-{item.endYear}
                </Typography>
            </Stack>
            {item.subsection?.map((subsection, index) => (
                <Typography key={index} variant="body2">
                    {subsection.title}: {subsection.content}
                </Typography>
            ))}
        </Grid>
    );
};

export default EducationItem;

export interface EducationItemProps {
    item: SchoolSectionValues;
}
