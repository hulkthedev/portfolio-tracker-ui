import Head from 'next/head';
import React from "react";
import styles from './defaultLayout.module.css';

export default function DefaultLayout({ children }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                <meta name="HandheldFriendly" content="true" />

                <title>Portfolio Tracker</title>
            </Head>

            <main className={ styles.main }>
                { children }
            </main>
        </>
    );
}