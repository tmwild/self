import Layout from '../components/Layout.js'
import SiteHead from '../components/SiteHead.js';

import Logs from '../data/logs.js'


const Page = (props) => (
  <Layout currentPage="logs">
    <SiteHead />
    <div className="row">
        <div className="col-12 mt-4 mb-5">

            <div className="jumbotron">
                <h3>{`${props.current.behaviour.substring(0, 70)}...`}</h3>
                <p className="lead">{props.current.id}</p>
                <ul>
                    <li><strong>Behaviour:</strong> {props.current.behaviour}</li>
                    <li><strong>Impact:</strong> {props.current.impact}</li>
                    <li><strong>Options:</strong> {props.current.options}</li>
                    <li><strong>Outcome:</strong> {props.current.outcome}</li>
                </ul>
            </div>
            
            {props.logs.map((log, index) => (
                <div key={index} className="mb-5">
                    <h5 className="mb-0">{log.behaviour}</h5>
                    <p className="mb-1"><small>{log.id}</small></p>
                    <ul className="mt-0">
                        <li><strong>Behaviour:</strong> {log.behaviour}</li>
                        <li><strong>Impact:</strong> {log.impact}</li>
                        <li><strong>Options:</strong> {log.options}</li>
                        <li><strong>Outcome:</strong> {log.outcome}</li>
                    </ul>
                </div>
            ))}
        </div>
    </div>

  </Layout>
)

Page.getInitialProps = async function(context) {
    const { id } = context.query

    Logs.reverse()

    let currentLog = Logs.filter(log => log.id === id)

    currentLog.length === 1 ? currentLog = currentLog[0] : currentLog = Logs[0];

    return {
        logs: Logs,
        current: currentLog
    }
}

export default Page