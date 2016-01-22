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
      <div>
        <div className="container">
          <a className="pull-right" href=""><span className="glyphicon glyphicon-plus"></span> Add collaborators</a>
          <h1>{this.props.experiment.title} <span className="label label-default">{this.props.experiment.status}</span> </h1>
          <Notes handleEditNotes={this.updateNotes} notes={this.props.experiment.notes} />
        </div>
      </div>
    )

  }
})
