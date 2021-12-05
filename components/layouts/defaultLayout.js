import Head from 'next/head';
import styles from './defaultLayout.module.css';

export default function DefaultLayout({ children }) {
    return (
        <>
            <Head>
                <title>Portfolio Tracker</title>
            </Head>

            <main className={styles.main}>
                {children}
            </main>
        </>
    );
}