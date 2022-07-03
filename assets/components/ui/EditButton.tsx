import type { FunctionComponent } from 'react';

// MUI Import
import { Button } from '@mui/material';

// Component Import
import { GoPencil } from 'react-icons/go';

const EditButton: FunctionComponent<EditButtonProps> = ({ edit }) => {
    return (
        <Button
            variant="contained"
            endIcon={<GoPencil />}
            type="button"
            color="primary"
            sx={{ px: 4 }}
            onClick={edit}
        >
            Edit
        </Button>
    );
};

export default EditButton;

interface EditButtonProps {
    edit: () => void;
}
