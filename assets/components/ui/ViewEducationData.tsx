import type { FunctionComponent } from 'react';

// Education Data Type
import type { SchoolSectionValues } from '@interface/reactHookForm';

// MUI Import
import { Box, Stack, Typography } from '@mui/material';
import EditButton from './EditButton';

const ViewEducationData: FunctionComponent<ViewEducationDataProps> = ({
    data,
    edit,
}) => {
    return (
        <>
            {data.map((item, index: number) => (
                <Box key={index} sx={{ mb: 3 }}>
                    <Stack
                        direction="row"
                        sx={{ justifyContent: 'space-between' }}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 700 }}
                        >
                            {item.school}
                        </Typography>
                        <Typography variant="body2">{item.location}</Typography>
                    </Stack>
                    <Stack
                        direction="row"
                        sx={{ justifyContent: 'space-between' }}
                    >
                        <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: 700 }}
                        >
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
                </Box>
            ))}
            <EditButton edit={edit} />
        </>
    );
};

export default ViewEducationData;

interface ViewEducationDataProps {
    data: SchoolSectionValues[];
    edit: () => void;
}
