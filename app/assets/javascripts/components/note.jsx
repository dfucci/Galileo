this.Note = React.createClass({
  render(){
    let heading = `heading${this.props.note.id}`;
    let collapse = `collapse${this.props.note.id}`;
    let collapse_link = `#collapse${this.props.note.id}`;
    let created_at = moment(this.props.note.created_at).fromNow();
    return(
      <div className="note panel panel-default">
        <div className="panel-heading" role="tab" id={ heading }>
          <h5 className="panel-title">
            <a aria-expanded="true" aria-controls={collapse} role="button"  data-toggle="collapse" data-parent="#accordion" href={collapse_link}>
              {created_at} by dfucci
            </a>
          </h5>
        </div>
        <div id={collapse} className="panel-collapse collapse" role="tabpanel" aria-labelledby={heading}>
          <div className="panel-body">{this.props.note.content}</div>
        </div>
      </div>
    )
  }
})
