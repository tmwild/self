import Header from './Header'
import SiteHead from '../components/SiteHead'

const Layout = (props) => (
  <div>
    <SiteHead />
    <Header currentPage={props.currentPage}/>
  
    <div className="container">
      {props.children}
    </div>
  </div>
)

export default Layout