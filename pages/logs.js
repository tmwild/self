import Layout from '../components/Layout'
import SiteHead from '../components/SiteHead'
import LogForm from '../components/forms/Log'

import Logs from '../data/logs'


const Page = (props) => (
  <Layout currentPage="logs">
    <SiteHead />
    <div className="row">
        <div className="col-12 mt-4 mb-5">

            <LogForm />

            <div className="jumbotron">
                <h3>{`${props.current.behaviour.substring(0, 70)}...`}</h3>
                <p className="lead">{ new Date(parseInt(props.current.id)*1000).toLocaleDateString('en-GB', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }) }</p>
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
                    <p className="mb-1"><small>{ new Date(parseInt(log.id)*1000).toLocaleDateString('en-GB', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }) }</small></p>
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
    const { id } = context.query || '00'

    Logs.data.reverse()

    let currentLog = Logs.data.filter(log => log.id === id)

    currentLog.length === 1 ? currentLog = currentLog[0] : currentLog = Logs.data[0];

    return {
        logs: Logs.data,
        current: currentLog
    }
}

export default Page