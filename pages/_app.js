import '../styles/globals.css'
import { Header, Footer } from '@/components'
const MyApp = ({ Component }) => {
  return(<>
    <Header/>
    <Component/>
    <Footer/>
    </>
  )
}
export default MyApp
