import Head from 'next/head';
import Navbar from "../navigation/navbar";
import styles from './appLayout.module.css';

export default function AppLayout({ children }) {
    return (
        <>
            <Head>
                <title>App</title>
            </Head>

            <main className={styles.main}>
                {children}
            </main>

            <Navbar />
        </>
    );
}