import * as Yup from 'yup';

export default Yup.object().shape({
    education: Yup.array()
        .of(
            Yup.object().shape({
                school: Yup.string().required(
                    'Please indicate your school name.'
                ),
                location: Yup.string().required(
                    'Please indicate the location of your school.'
                ),
                startYear: Yup.string()
                    .required(
                        'Please indicate your start year for this school.'
                    )
                    .matches(
                        /(19|20)[0-9]{2}/,
                        'Please put a valid start year.'
                    ),
                endYear: Yup.string()
                    .required(
                        'Please indicate your graduation year for this school.'
                    )
                    .matches(
                        /(19|20)[0-9]{2}/,
                        'Please put a valid graduation year.'
                    ),
                subsection: Yup.array().of(
                    Yup.object().shape({
                        title: Yup.string().required(
                            'Please put a subsection title.'
                        ),
                        content: Yup.string().required(
                            'Please put a subsection content.'
                        ),
                    })
                ),
            })
        )
        .min(
            1,
            'Please put an education so employers will know where you studied.'
        ),
});
