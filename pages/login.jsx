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


            <section >
                <div className="ui equal width grid">
                    <div className="column">
                        <div className="ui segment">
                            1
                        </div>
                    </div>
                    <div className="eight wide column">
                        <div className="ui segment">
                            2
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui segment">
                            3
                        </div>
                    </div>
                </div>

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