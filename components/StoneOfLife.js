
const StoneOfLife = (props) => (
    <div className="card mt-4">
        <div className="card-body">
            <h4 className="card-title">Mindset Makeup</h4>

            <h5 className="text-muted">Truths</h5>
            <p>
            {props.stone.truths.map((truth, index) => (
                (index + 1) === props.stone.truths.length ? `${truth}.` : `${truth}, `
            ))}
            </p>

            <h5 className="text-muted">Values</h5>
            <p>
            {props.stone.values.map((truth, index) => (
                (index + 1) === props.stone.truths.length ? `${truth}.` : `${truth}, `
            ))}
            </p>

            <h5 className="text-muted">Lifeforce</h5>
            <p>
                {props.stone.life}
            </p>
        </div>
    </div>
)

export default StoneOfLife