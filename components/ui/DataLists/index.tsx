// Interface Import
import type { FunctionComponent } from 'react';
import type {
    PersonalFields,
    SchoolSectionValues,
} from '@interface/reactHookForm';
import { SectionTypes } from '@interface/sections';

import { Fragment } from 'react';

// MUI Import
import { Grid } from '@mui/material';

// Component Import
import EditButton from '../EditButton';
import EducationItem from '../EducationItem';
import HeaderItem from '../HeaderItem';

// Atom Import
import { sectionContentState, viewSectionContentState } from '@atom';
import { useRecoilState, useRecoilValue } from 'recoil';

const DataLists: FunctionComponent<DataListsProps> = ({ type = 'header' }) => {
    const DATA = useRecoilValue(sectionContentState);
    const [viewContent, setViewContent] = useRecoilState(
        viewSectionContentState
    );

    if (!DATA.length || !viewContent) return null;

    const hideContent = () => setViewContent(false);

    return (
        <>
            <Grid container spacing={2} sx={{ mb: 3 }}>
                {DATA.map((item, index) => (
                    <Fragment key={index}>
                        {type === 'header' ? (
                            <HeaderItem
                                textAlign={index % 2 !== 0 ? 'right' : 'left'}
                                item={item as PersonalFields}
                            />
                        ) : (
                            <EducationItem item={item as SchoolSectionValues} />
                        )}
                    </Fragment>
                ))}
            </Grid>
            <EditButton edit={hideContent}></EditButton>
            <></>
        </>
    );
};

export default DataLists;

export interface DataListsProps {
    type: SectionTypes;
}
