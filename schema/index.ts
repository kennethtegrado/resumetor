import { yupResolver } from '@hookform/resolvers/yup';

import headerSchema from './header.schema';

import educationSchema from './education.schema';

const resumeHeaderResolver = yupResolver(headerSchema);
const educationResolver = yupResolver(educationSchema);

export { resumeHeaderResolver, educationResolver };
