import Head from 'next/head';
import Script from 'next/script';
import React from "react";
import styles from './defaultLayout.module.css';
import variables from '../../public/styles/variables.module.scss';
// import semanticJs from "semantic-ui-css/semantic.min";

export default function DefaultLayout({ children }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                <meta name="HandheldFriendly" content="true" />

                <title>Portfolio Tracker</title>
                {/*<Script src={semanticJs} strategy="beforeInteractive" />*/}
            </Head>

            <main className={ styles.main }>
                { children }

                <div color={variables.primaryColor}></div>
            </main>
        </>
    );
}