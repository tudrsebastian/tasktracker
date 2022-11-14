import * as Yup from 'yup';


export const validationSchema = Yup.object({
    full_name: Yup.string().min(2, 'Must be longer than 2 characters!').max(25, 'Must not exceed 25 characters!').required('Please provide your name'),
    email: Yup.string().email('Invalid email! Please try again!').required('Please provide an email address'),
    password: Yup.string().min(6, 'Password must be atleast 6 characters long!!!').required('Please provide a password')
})