import Link from 'next/link'

const ListLogs = (props) => (
    <div className="card mt-4 p-0">
        <h4 className="card-header">Chimp Log</h4>
        <div className="card-body p-0">
            <div class="list-group-flush">
            {props.logs.map((log) => (
                <Link as={`/logs/${log.id}`} href={`/logs?id=${log.id}`} key={log.id}>
                    <a className="list-group-item list-group-item-action">{log.id}: {log.behaviour.substring(0,50)}</a>
                </Link>
            ))}
            </div>
        </div>
    </div>
)

export default ListLogs