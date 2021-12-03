import 'normalize.css/normalize.css'
import '../public/styles/global.css'
import variables from '../public/styles/variables.module.scss'

export default function Portfolio({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page)
    return getLayout(<Component {...pageProps} />)
}