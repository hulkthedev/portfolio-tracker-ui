export default function Index() {
    return (
        <section>
            <h2>Redirect to Login / Overview Page</h2>
        </section>
    );
}

export async function getStaticProps(context) {
    // const res = await fetch(`https://.../data`)
    // const data = await res.json()

    /**
     * check on login status, if not logged in -> login
     * else -> overview
     *
     * OR
     *
     * index = Login
     * show login if not logged in else redirect -> overview
     */

    const data = false;

    if (!data) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }


    return {
        props: { data }, // will be passed to the page component as props
    };
}