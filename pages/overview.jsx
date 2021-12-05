import AppLayout from '../components/layouts/appLayout';

export default function Overview() {
    return (
        <section>
            <h2>Overview</h2>
        </section>
    );
}

Overview.getLayout = function getLayout(page) {
    return (
        <AppLayout>
            { page }
        </AppLayout>
    );
};