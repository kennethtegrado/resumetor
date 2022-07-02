import type { FunctionComponent } from 'react';

// MUI Import
import { Button } from '@mui/material';

// Component Import
import { TiBookmark } from 'react-icons/ti';

const SaveButton: FunctionComponent = () => {
    return (
        <Button
            variant="contained"
            endIcon={<TiBookmark />}
            type="submit"
            sx={{ px: 5 }}
        >
            Save
        </Button>
    );
};

export default SaveButton;
