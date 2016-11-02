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
				<div className='page-header'>
					<div className="pull-right">
						<i className="fa fa-plus" aria-hidden="true"></i>
					</div>
					<h2> Experiments </h2>
				</div>
				{this.renderExperiments()}
			</div>
		)
	}
})
