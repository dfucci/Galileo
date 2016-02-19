this.ExperimentDetail = React.createClass({
  updateNotes(note, data){
    let index = this.props.experiment.notes.indexOf(note);
    let notes = this.props.experiment.notes.slice();
    notes.splice(index, 1, data);
    let experiment = React.addons.update(this.props.experiment, {notes: {$set: notes}});
    this.replaceProps({
      experiment: experiment
    });
  },

  render(){
    return (
        <div className="container">
          <a className="pull-right" href=""><span className="glyphicon glyphicon-plus"></span> Add collaborators</a>
          <h1 className="page-header">{this.props.experiment.title}</h1>
          <div className="row">
          <div className="col-md-2">
            <Phases status={this.props.experiment.status}/>
          </div>
          <div className="col-md-10">
            {(()=>{
              switch (this.props.experiment.status) {
                case "planning" : return <ExperimentPlanning />
                case "scoping" : return <ExperimentScoping />
                case "executing" : return <ExperimentExecuting />
                case "analyzing" : return  <ExperimentAnalyzing />
                case "reporting" : return <ExperimentReporting />
              }
            })()}
            <Notes handleEditNotes={this.updateNotes} notes={this.props.experiment.notes} />
          </div>
          </div>
        </div>
    )
  }
});


this.ExperimentReporting = React.createClass({
  render(){
    return(
      <div>Experiment reporting according to Wohlin</div>
    )
  }
});

this.ExperimentAnalyzing = React.createClass({
  render(){
    return(
      <div>Experiment analyzing according to Wohlin</div>
    )
  }
});

this.ExperimentExecuting = React.createClass({
  render(){
    return(
      <div>Experiment executing according to Wohlin</div>
    )
  }
});

this.ExperimentScoping = React.createClass({
  render(){
    return(
      <div>Experiment scoping according to Wohlin</div>
    )
  }
});

this.ExperimentPlanning = React.createClass({
  render(){
    return(
      <div>Experiment planning according to Wohlin</div>
    )
  }
})
