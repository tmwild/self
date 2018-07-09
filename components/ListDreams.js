import Link from 'next/link'

const ListDreams = (props) => (
    <div className="card mt-4 p-0">
        <h4 className="card-header">Dreams</h4>
        <div className="card-body p-0">
            <div className="list-group-flush">
            {props.dreams.map((dream) => (
                <Link as={`/dreams/${dream.id}`} href={`/dreams?id=${dream.id}`} key={dream.id}>
                    <a className="list-group-item list-group-item-action">{dream.name}</a>
                </Link>
            ))}
            </div>
        </div>
    </div>
)

export default ListDreams