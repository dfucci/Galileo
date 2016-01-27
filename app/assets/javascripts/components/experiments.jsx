this.Experiments = React.createClass({
  getInitialState(){
    return {experiments: this.props.data};
  },

  getDefaultProps(){
    return {records: []};
  },

  renderExperiments(){
    return this.state.experiments.map((experiment)=>{
      return <Experiment key={experiment.id} experiment={experiment} />
    });
  },

  render(){
    return(
      <div className='experiments'>
        <h2 className='page-header'>
          Experiments
        </h2>
        {this.renderExperiments()}
      </div>
    )
  }
})
