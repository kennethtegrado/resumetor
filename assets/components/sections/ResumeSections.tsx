import type { FunctionComponent } from 'react';

import { useState } from 'react';

// MUI Import
import { Box, Button, ButtonGroup } from '@mui/material';

const ResumeSections: FunctionComponent = () => {
    const [sections, setSections] = useState<FunctionComponent | null>([]);

    return (
        <Box sx={{ my: 5 }}>
            <ButtonGroup
                variant="outlined"
                sx={{ display: 'flex', justifyContent: 'center', my: 2 }}
            >
                <Button>Add Education Section</Button>
                <Button>Add Experience Section</Button>
                <Button>Add Skill Section</Button>
            </ButtonGroup>
        </Box>
    );
};

export default ResumeSections;
