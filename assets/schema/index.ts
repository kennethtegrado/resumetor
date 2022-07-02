import { yupResolver } from '@hookform/resolvers/yup';

import headerSchema from './header.schema';

const resumeHeaderResolver = yupResolver(headerSchema);

export { resumeHeaderResolver };
