import Header from './Header'
import SiteHead from '../components/SiteHead'
import Footer from '../components/Footer'

const Layout = (props) => (
  <div>
    <SiteHead />
    <Header currentPage={props.currentPage}/>
  
    <div className="container">
      {props.children}
    </div>

    <Footer />
  </div>
)

export default Layout