this.Experiment = React.createClass({
  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <a href={this.props.experiment.id} className="pull-right"><span className="glyphicon glyphicon-pencil"></span></a>
          <h3 className="panel-title">{this.props.experiment.title}</h3>
        </div>
        <div className="panel-body">
          {this.props.experiment.aim}
        </div>
      </div>
    )
  }
})
