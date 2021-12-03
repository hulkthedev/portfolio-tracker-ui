import Layout from '../components/layouts/layout'
import Navbar from '../components/navigation/navbar'

export default function Overview() {
    return (
        <section>
            <h2>Overview</h2>
        </section>
    )
}

Overview.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}