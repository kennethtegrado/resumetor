// Interface Import
import type { FunctionComponent } from 'react';
import type { PersonalFields } from '@interface/reactHookForm';

// MUI Import
import { Grid, Link, Typography } from '@mui/material';

const HeaderItem: FunctionComponent<HeaderItemProps> = ({
    textAlign = 'left',
    item,
}) => {
    let content: string = '',
        shorthand: string = '',
        url: string = '';

    if (typeof item.value === 'string') content = item.value;
    else {
        shorthand = item.value.shorthand;
        url = item.value.url;
    }

    return (
        <Grid
            item
            xs={12}
            md={
                item.key === 'name' || item.key === 'job Position'
                    ? undefined
                    : 6
            }
        >
            {item.key !== 'link' ? (
                <Typography sx={{ textAlign }}>{content}</Typography>
            ) : (
                <Link href={url} sx={{ textTransform: 'lowercase' }}>
                    {shorthand}
                </Link>
            )}
        </Grid>
    );
};

export default HeaderItem;

export interface HeaderItemProps {
    textAlign?: 'left' | 'right' | 'auto';
    item: PersonalFields;
}
