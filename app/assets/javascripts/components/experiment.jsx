this.Experiment = React.createClass({
  render(){
    let link = `experiments/${this.props.experiment.id}`;
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <a href={link} className="pull-right"><span className="glyphicon glyphicon-folder-open"></span></a>
          <h3 className="panel-title">{this.props.experiment.title}</h3>
        </div>
        <div className="panel-body">
          {this.props.experiment.aim}
        </div>
      </div>
    )
  }
})
