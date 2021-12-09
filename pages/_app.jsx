import 'normalize.css/normalize.css';
import 'semantic-ui-css/semantic.min.css';
import '../public/styles/global.css';

export default function Portfolio({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);
    return getLayout(
        <Component {...pageProps} />
    );
}