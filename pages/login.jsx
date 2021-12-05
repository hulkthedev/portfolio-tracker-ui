import Signup from "../components/login/signup";
import Head from "next/head";
import styles from "../components/layouts/layout.module.css";
import Navbar from "../components/navigation/navbar";

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