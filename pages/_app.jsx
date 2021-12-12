// import 'normalize.css/normalize.css';
import '../public/styles/fomantic.scss';
import '../public/styles/global.scss';

export default function Portfolio({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page);
    return getLayout(
        <Component {...pageProps} />
    );
}