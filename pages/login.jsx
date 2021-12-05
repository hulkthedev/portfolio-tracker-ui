import Head from "next/head";
import Signup from "../components/login/signup";
import DefaultLayout from "../components/layouts/defaultLayout";

export default function Login() {
    return (
        <section>
            <h2>Login Page</h2>
            <Signup />
        </section>
    );
}

Login.getLayout = function getLayout(page) {
    return (
        <DefaultLayout>
            { page }
        </DefaultLayout>
    );
};