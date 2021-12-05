import Head from "next/head";
import Signup from "../components/login/signup";
import DefaultLayout from "../components/layouts/defaultLayout";
import React from "react";

export default function Login() {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            <section>
                <h2>Login Page</h2>
                <Signup />
            </section>
        </>
    );
}

Login.getLayout = function getLayout(page) {
    return (
        <DefaultLayout>
            { page }
        </DefaultLayout>
    );
};