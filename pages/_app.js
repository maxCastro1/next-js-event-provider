import { Header } from "../src/components/header/header"
import MainLayout from "../src/components/main-layout/main-layout"
import '../styles/globals.css'
import '../styles/home.sass'
export default function MyApp({ Component, pageProps }) {
    return (
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
            
             )
  }