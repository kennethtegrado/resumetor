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

    const { key } = item;

    return (
        <Grid
            item
            xs={12}
            md={key === 'name' || key === 'job Position' ? 12 : 6}
            sx={
                key !== 'name' && key !== 'job Position'
                    ? { textAlign }
                    : undefined
            }
        >
            {key === 'name' ? (
                <Typography
                    variant="h4"
                    sx={{ display: 'block', fontWeight: 600 }}
                >
                    {content}
                </Typography>
            ) : key === 'job Position' ? (
                <Typography variant="h5" sx={{ display: 'block' }}>
                    {content}
                </Typography>
            ) : key !== 'link' ? (
                <Typography>{content}</Typography>
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
