const List = (props) => (
    <React.Fragment>
        <h4 className="mt-5">This Week</h4>

        <table className="table table-borderless">
            <thead>
                <tr>
                    <th scope="col">Due</th>
                    <th scope="col">Description</th>
                    <th scope="col">Reward</th>
                </tr>
            </thead>
            <tbody>

                {props.weeklyTasks.map((level, index) => (
                    <tr key={index} className={ level.status > 0 ? 'table-success' : 'table-light'}>
                        <td>{level.due}</td>
                        <td>{level.description}</td>
                        <td>{level.reward}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </React.Fragment>
)

export default List