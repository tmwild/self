import Layout from '../components/Layout'
import ListGoals from '../components/ListGoals'
import ListLogs from '../components/ListLogs'
import StoneOfLife from '../components/StoneOfLife'

import Goals from '../data/goals'
import Stone from '../data/stone'
import Logs from '../data/logs'


const Page = (props) => (

  <Layout currentPage="home">

    <div className="row">
        <div className="col-12 col-lg-8">
            <ListGoals goals={props.goals} />
            <ListLogs logs={props.logs} />
        </div>

        <div className="col-12 col-lg-4">
            <StoneOfLife stone={props.stone} />
        </div>
    </div>

  </Layout>
)

Page.getInitialProps = async function() {

  return {
    goals: Goals.data,
    stone: Stone.data[0],
    logs: Logs.data.reverse()
  }
}

export default Page