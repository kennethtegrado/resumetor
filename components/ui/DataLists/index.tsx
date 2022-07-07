// Interface Import
import type { FunctionComponent } from 'react';
import type {
    PersonalFields,
    SchoolSectionValues,
} from '@interface/reactHookForm';
import type { HeaderItemProps } from '../HeaderItem';
import type { EducationItemProps } from '../EducationItem';

import { Fragment } from 'react';

// MUI Import
import { Grid } from '@mui/material';

// Component Import
import EditButton from '../EditButton';

import EducationItem from '../EducationItem';
import HeaderItem from '../HeaderItem';

const DataLists: FunctionComponent<DataListsProps> = ({
    data: DATA,
    hideData,
    type = 'header',
}) => {
    if (!DATA.length) return null;

    return (
        <>
            <Grid container spacing={2} sx={{ my: 2 }}>
                {DATA.map((item, index) => (
                    <Fragment key={index}>
                        {type === 'header' ? (
                            <HeaderItem
                                textAlign={index % 2 === 0 ? 'right' : 'left'}
                                item={item as PersonalFields}
                            />
                        ) : (
                            <EducationItem item={item as SchoolSectionValues} />
                        )}
                    </Fragment>
                ))}
            </Grid>
            <EditButton edit={hideData}></EditButton>
            <></>
        </>
    );
};

export default DataLists;

export interface DataListsProps {
    data: Array<SchoolSectionValues | PersonalFields>;
    type: 'education' | 'experience' | 'skill' | 'header';
    hideData: () => void;
}
