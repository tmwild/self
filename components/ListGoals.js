import Link from 'next/link'

const ListGoals = (props) => (
    <div className="card mt-4 p-0">
        <h4 className="card-header">Goals</h4>
        <div className="card-body p-0">
            <div className="list-group-flush">
            {props.goals.map((goal) => (
                <Link as={`/goals/${goal.id}`} href={`/goals?id=${goal.id}`} key={goal.id}>
                    <a className="list-group-item list-group-item-action">{goal.name}</a>
                </Link>
            ))}
            </div>
        </div>
    </div>
)

export default ListGoals