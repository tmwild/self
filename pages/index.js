import Layout from '../components/Layout'
import ListDreams from '../components/ListDreams'
import ListLogs from '../components/ListLogs'
import StoneOfLife from '../components/StoneOfLife'

import Dreams from '../data/dreams'
import Stone from '../data/stone'
import Logs from '../data/logs'


const Page = (props) => (

  <Layout currentPage="home">

    <div className="row">
        <div className="col-12 col-lg-8">
            <ListDreams dreams={props.dreams} />
            <ListLogs logs={props.logs} />
        </div>

        <div className="col-12 col-lg-4">
            <StoneOfLife stone={props.stone} />
        </div>
    </div>

  </Layout>
)

Page.getInitialProps = async function() {

  const LogsArr = Logs.data.sort(function (a, b) {
    let comparison = 0;
    if (a.id < b.id) {
      comparison = 1;
    } else {
      comparison = -1;
    }
    return comparison;
  })

  return {
    dreams: Dreams.data,
    stone: Stone.data[0],
    logs: LogsArr
  }
}

export default Page