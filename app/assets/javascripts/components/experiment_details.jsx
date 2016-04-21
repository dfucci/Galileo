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

  updateScope(scope, data){
    console.log(scope);
    console.log(data);
    let experiment = React.addons.update(this.props.experiment, {scope: {$set: scope.scope}});
    console.log(experiment);
    this.replaceProps({
       experiment: experiment
   })
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
                case "scoping" : return <ExperimentScoping handleEditScope={this.updateScope} experiment={this.props.experiment}/>
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
  getInitialState(){
    return {editing: false}
  },
  save(e){
    e.preventDefault();
    let data = {
      analyze: ReactDOM.findDOMNode(this.refs.object).value,
      purpose: ReactDOM.findDOMNode(this.refs.purpose).value,
      focus: ReactDOM.findDOMNode(this.refs.focus).value,
      perspective: ReactDOM.findDOMNode(this.refs.perspective).value,
      context: ReactDOM.findDOMNode(this.refs.context).value
    };
    let url = `/experiments/${this.props.experiment.id}/scoping`
    $.ajax({
      method: 'PUT',
      url: url,
      dataType: 'JSON',
      data: {payload: data},
      success: (data) => {
        this.setState({editing: false});
        this.props.handleEditScope(this.props.experiment, data);
      }
    });
  },
  handleChange(e){
    e.preventDefault();
    this.setState({
      editing: !this.state.editing
    })
  },
  render(){
    if(this.state.editing) return this.scopeEditing()
      else return this.scopeNormal()
  },
  scopeNormal(){
    return(
      <div>
        <p>Analyze {this.props.experiment.scope.analyze}</p>
        <p>for the purpose of {this.props.experiment.scope.purpose}</p>
        <p>with respect to their {this.props.experiment.scope.focus}</p>
        <p>from the point of view of  {this.props.experiment.scope.perspective}</p>
        <p>in the context of  {this.props.experiment.scope.context}</p>
        <button onClick={this.handleChange}>Edit</button>
      </div>
    )
  },
  scopeEditing(){
    return(
      <form>
        <b>Analyze</b> <input type="text" name="object" ref="object" placeholder={this.props.experiment.scope.analyze ? this.props.experiment.scope.analyze : "object of the study"}/><br/>
        <b>for the purpose of </b> <input type="text" name="purpose" ref="purpose" placeholder={this.props.experiment.scope.purpose ? this.props.experiment.scope.purpose : "purpose"}/><br/>
        <b>with respect to their </b> <input type="text" name="focus" ref="focus" placeholder={this.props.experiment.scope.focus ? this.props.experiment.scope.focus : "focus"}/><br/>
        <b>from the point of view of </b> <input type="text" name="perspective" ref="perspective" placeholder={this.props.experiment.scope.perspective ? this.props.experiment.scope.perspective : "perspective"}/><br/>
        <b>in the context of </b> <input type="text" name="context" ref="context" placeholder={this.props.experiment.scope.context ? this.props.experiment.scope.context : "context"}/><br/>
        <button type="submit" onClick={this.save}>Save</button>
      </form>
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
