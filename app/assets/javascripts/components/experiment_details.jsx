this.ExperimentDetail = React.createClass({
  render(){
    return (
      <div>
        <a className="pull-right" href=""><span className="glyphicon glyphicon-plus"></span> Add collaborators</a>
        <h1>{this.props.experiment.title} <span className="label label-default">{this.props.experiment.status}</span> </h1>
      </div>
    )

  }
})
