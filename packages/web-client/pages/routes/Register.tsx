import Head from "next/head";
import RegisterForm from "../../auth/Registration/RegisterForm";
const Register = () => {
    return (
        <div>
            <Head>
                <title>Register</title>
            </Head>
            <h1>Register Page</h1>
            <RegisterForm />
        </div>
    )
}
export default Register;