this.Experiment = React.createClass({
  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.experiment.title}</h3>
        </div>
        <div className="panel-body">
          {this.props.experiment.aim}
        </div>
      </div>
    )
  }
})
