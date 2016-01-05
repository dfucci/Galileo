this.ExperimentDetail = React.createClass({
  render(){
    return (<div>{this.props.experiment.title} {this.props.experiment.notes[0].content} </div>)
  }
})
