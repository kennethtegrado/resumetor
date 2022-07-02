import * as Yup from 'yup';

export default Yup.object().shape({
    name: Yup.string().required(
        'Please put a name so employers can identify you.'
    ),
    'job Position': Yup.string().required(
        'Please put the job position you are applying for'
    ),
    number: Yup.string()
        .required('Please put a number so employers can contact you.')
        .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            'Please put a valid mobile number.'
        ),
    email: Yup.string()
        .email('Please put a valid email address.')
        .required('Please put an email so employers can reach you.'),
    location: Yup.string().required(
        'Please put a location so employers will know where you are.'
    ),
    link: Yup.array().of(
        Yup.object().shape({
            link: Yup.string()
                .matches(
                    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                    'Please put a valid link that employers can check out.'
                )
                .required('Please put a .'),
        })
    ),
});
