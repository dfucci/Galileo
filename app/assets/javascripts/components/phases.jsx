this.Phases = React.createClass({
  isActive(status){
    let isActive =  status === this.props.status ? "active" : "";
    return `list-group-item ${isActive}`;
  },

  render(){
    return (
      <div className="panel panel-default">
        <div className="panel-heading text-center">
          <h3 className="panel-title">Phases</h3>
        </div>
        <ul className="list-group">
          <li className={this.isActive("scoping")}>Scoping</li>
          <li className={this.isActive("planning")}>Planning</li>
          <li className={this.isActive("executing")}>Executing</li>
          <li className={this.isActive("analyzing")}>Analyzing</li>
          <li className={this.isActive("reporting")}>Reporting</li>
        </ul>
      </div>
      )
  }
});
