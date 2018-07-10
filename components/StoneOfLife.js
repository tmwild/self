
const StoneOfLife = (props) => (

    <div className="card bg-light mb-3 mt-4">
        
        <div className="card-header">The Stone of Life</div>
        
        <div className="card-body">
            <h5>Truths</h5>
            <p>
            {props.stone.truths.map((truth, index) => (
                (index + 1) === props.stone.truths.length ? `${truth}.` : `${truth}, `
            ))}
            </p>

            <h5>Values</h5>
            <p>
            {props.stone.values.map((truth, index) => (
                (index + 1) === props.stone.truths.length ? `${truth}.` : `${truth}, `
            ))}
            </p>

            <h5>Lifeforce</h5>
            <p>
                {props.stone.life}
            </p>
        </div>
    </div>
)

export default StoneOfLife