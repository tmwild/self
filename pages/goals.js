import Layout from '../components/Layout'
import ListGoals from '../components/ListGoals'
import SiteHead from '../components/SiteHead'

import Goals from '../data/goals'

const Page = (props) => (
  <Layout currentPage="goals">
    <SiteHead />
    <div className="row">
        <div className="col-12 mb-0 mt-4">
            <h2>{props.current.name}</h2>
            
            <p className="lead">{props.current.description}</p>
            <p className="text-muted">Due: {props.current.deadline}</p>

            <h4 className="mt-5">Foundation Stones</h4>

            <div className="row mx-auto mt-3 mb-5">
                {props.current.foundationStones.map((stone, index) => (
                    <div className="card col-sm-5 col-md-3 mb-2 mt-0 mr-2 p-0" key={index}>
                        <p className="card-header">{stone.title}</p>
                        <div className="card-body">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped bg-dark" role="progressbar" style={{width: stone.status + '%'}} aria-valuenow={stone.status} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>

            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">Stone</th>
                        <th scope="col">Description</th>
                        <th scope="col">Reward</th>
                    </tr>
                </thead>
                <tbody>

                    {props.current.tasks.map((level, index) => (
                        <tr key={index} className={ level.status > 0 ? 'table-success' : 'table-light'}>
                            <td>{`${ props.current.foundationStones.filter(stone => stone.id === level.stone)[0].title}`}</td>
                            <td>{level.description}</td>
                            <td>{level.reward}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
        </div>

        <div className="col-12 mb-0 mt-4 mb-5">
            <ListGoals goals={props.goals} />
        </div>

    </div>

  </Layout>
)

Page.getInitialProps = async function(context) {
    const { id } = context.query

    let currentGoal = Goals.data.filter(goal => goal.id === id)

    currentGoal.length === 1 ? currentGoal = currentGoal[0] : currentGoal = Goals.data[0];

    return {
        goals: Goals.data,
        current: currentGoal
    }
}

export default Page