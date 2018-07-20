import Layout from '../components/Layout'
import ListDreams from '../components/ListDreams'
import SiteHead from '../components/SiteHead'
import DreamInfo from '../components/DreamInfo'

import Dreams from '../data/dreams'

const Page = (props) => (
  <Layout currentPage="dreams">
    <SiteHead />
    <div className="row">
        <div className="col-12 col-lg-9 mb-0 mt-4">
            <h2>{props.current.name}</h2>
            
            <p className="lead">{props.current.description}</p>
            <p className="text-muted">Due: {props.current.deadline}</p>

            <h4 className="mt-5">Weekly Tasks</h4>

            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">Due</th>
                        <th scope="col">Description</th>
                        <th scope="col">Stone</th>
                        <th scope="col">Reward</th>
                    </tr>
                </thead>
                <tbody>

                    {props.current.tasks.map((level, index) => (
                        <tr key={index} className={ level.status > 0 ? 'table-success' : 'table-light'}>
                            <td>{level.due}</td>
                            <td>{level.description}</td>
                            <td>{`${ props.current.foundationStones.filter(stone => stone.id === level.stone)[0].title}`}</td>
                            <td>{level.reward}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h4 className="mt-5">Foundation Stones</h4>

            <div className="row mx-auto mt-3 mb-5">
                {props.current.foundationStones.map((stone, index) => (
                    <div className="card col-12 mb-2 mt-0 mr-2 p-0" key={index}>
                        <p className="card-header">{stone.title}</p>
                        <div className="card-body">
                            <p>{stone.description}</p>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: stone.status + '%'}} aria-valuenow={stone.status} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>

        <div className="col-12 col-lg-3 mb-0 mt-4 mb-5">
            <DreamInfo />
            <ListDreams dreams={props.dreams} />
        </div>

    </div>

  </Layout>
)

Page.getInitialProps = async function(context) {
    const { id } = context.query

    let currentDream = Dreams.data.filter(dream => dream.id === id)

    currentDream.length === 1 ? currentDream = currentDream[0] : currentDream = Dreams.data[0];

    return {
        dreams: Dreams.data,
        current: currentDream
    }
}

export default Page