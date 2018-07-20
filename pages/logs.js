import Layout from '../components/Layout'
import SiteHead from '../components/SiteHead'
import LogForm from '../components/forms/Log'
import Tips from '../components/ManagementTips'

import Logs from '../data/logs'


const Page = (props) => (
  <Layout currentPage="logs">
    <SiteHead />
    <div className="row">
        <div className="col-12 col-lg-9 mt-4">

            <LogForm />
            
            {props.logs.map((log, index) => (
                <div key={index} className="mb-5">
                    <h5 className="mb-0">{log.behaviour.substring(0, 55)}...</h5>
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
        <div className="col-12 col-lg-3">
            <Tips />
        </div>
    </div>

  </Layout>
)

Page.getInitialProps = async function(context) {
    const { id } = context.query || '00'

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
        logs: LogsArr
    }
}

export default Page