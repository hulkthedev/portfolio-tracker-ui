import Head from 'next/head'
import Navbar from "../navigation/navbar";
import styles from './layout.module.css'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Layouts Example</title>
            </Head>

            <main className={styles.main}>
                {children}
            </main>

            <Navbar />
        </>
    )
}