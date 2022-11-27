import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
// _app imports many things. ex) google analytics


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
