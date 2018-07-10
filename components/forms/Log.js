const axios = require('axios')

class LogForm extends React.Component {
    constructor(props) {
      super(props);

        this.state = {
            id: '123',
            behaviour: '',
            impact: '',
            options: '',
            outcome: ''
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value })
    }

    handleSubmit(event) {

        event.preventDefault();

        const id = + new Date()
        const { behaviour, impact, options, outcome } = this.state

        axios.post('api/add/logs', { id, behaviour, impact, options, outcome })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error)
        })
    }
  
    render() {
      return (
        <React.Fragment>
        <p>
            <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#logForm" aria-expanded="false" aria-controls="logForm">
                Add Daily Log
            </button>
        </p>
        <div className="collapse mb-3" id="logForm">
            <div className="card card-body">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="behaviour" className="col-sm-2 col-form-label">Behaviour:</label>
                        <div className="col-sm-10">
                            <small className="form-text text-muted">Think of times your thoughts were led by emotions you didn't want.</small>
                            <input value={this.state.behaviour} onChange={this.handleChange} type="text" className="form-control" name="behaviour" id="behaviour" placeholder="Chimp thoughts or behaviour" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="impact" className="col-sm-2 col-form-label">Impact:</label>
                        <div className="col-sm-10">
                        <small className="form-text text-muted">What was the impact of your thoughts or behaviour?.</small>
                            <input value={this.state.impact} onChange={this.handleChange} type="text" className="form-control" name="impact" id="impact" placeholder="What real or possible impact did the behavour have?" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="options" className="col-sm-2 col-form-label">Options:</label>
                        <div className="col-sm-10">
                            <small className="form-text text-muted">Exercise, box or banana.</small>
                            <input value={this.state.options} onChange={this.handleChange} type="text" className="form-control" name="options" id="options" placeholder="What options were available to manage the chimp?" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="outcome" className="col-sm-2 col-form-label">Outcome:</label>
                        <div className="col-sm-10">
                            <small className="form-text text-muted">Was your management technique successful? Why?.</small>
                            <input value={this.state.outcome} onChange={this.handleChange} type="text" className="form-control" name="outcome" id="outcome" placeholder="What was the outcome?" />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary pull-right">Submit</button>
                </form>
            </div>
        </div>
        </React.Fragment>
      );
    }
  }

  export default LogForm