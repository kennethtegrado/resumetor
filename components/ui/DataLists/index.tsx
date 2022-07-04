// Interface Import
import type { FunctionComponent } from 'react';
import type {
    PersonalFields,
    SchoolSectionValues,
} from '@interface/reactHookForm';
import type { EducationItemProps } from '../EducationItem';

// MUI Import
import { Grid } from '@mui/material';

const DataLists: FunctionComponent<DataListsProps> = ({
    data: DATA,
    itemComponent: ItemComponent,
}) => {
    return (
        <Grid container spacing={2} sx={{ my: 2 }}>
            {DATA.map((item, index) => (
                <ItemComponent
                    key={index}
                    item={item}
                    textAlign={index % 2 !== 0 && 'right'}
                />
            ))}
        </Grid>
    );
};

export default DataLists;

interface DataListsProps {
    data: Array<SchoolSectionValues | PersonalFields>;
    itemComponent: FunctionComponent<EducationItemProps | any>;
}
