this.Note = React.createClass({
  getInitialState(){
    return {edit: false}
  },

  handleChange(e){
    e.preventDefault();
    this.setState({
      edit: !this.state.edit
    });
  },

  saveNote(e){
    e.preventDefault();
    let data = {content: ReactDOM.findDOMNode(this.refs.content).value};
    let url = `/experiments/${this.props.note.experiment_id}/notes/${this.props.note.id}`;
    $.ajax({
      method: 'PUT',
      url: url,
      dataType: 'JSON',
      data: {note: data},
      success: (data)=>{
        this.setState({ edit: false });
        this.props.handleEditNote(this.props.note, data);
       }
    })
  },

  noteEditing(){
    let heading = `heading${this.props.note.id}`;
    let collapse = `collapse${this.props.note.id}`;
    let collapse_link = `#collapse${this.props.note.id}`;
    let created_at = moment(this.props.note.created_at).fromNow();
    return(
      <div className="note panel panel-default">
        <div className="panel-heading" role="tab" id={ heading }>
          <a onClick={this.saveNote}  ><span className="glyphicon glyphicon-floppy-disk pull-right"></span> </a>
          <h5 className="panel-title">
            <a aria-expanded="true" aria-controls={collapse} role="button"  data-toggle="collapse" data-parent="#accordion" href={collapse_link}>
              {created_at} by dfucci
            </a>
          </h5>
        </div>
        <div id={collapse} className="panel-collapse collapse in"  role="tabpanel" aria-labelledby={heading}>
          <div className="panel-body">
            <div className="form-group">
              <label htmlFor="comment">Note:</label>
              <textarea ref="content" className="form-control col-xs-12" rows="5" id="note" defaultValue={this.props.note.content}>
              </textarea>
            </div>
          </div>
        </div>
      </div>
    )
  },

  noteNormal(){
    let heading = `heading${this.props.note.id}`;
    let collapse = `collapse${this.props.note.id}`;
    let collapse_link = `#collapse${this.props.note.id}`;
    let created_at = moment(this.props.note.created_at).fromNow();
    return(
      <div className="note panel panel-default">
        <div className="panel-heading" role="tab" id={ heading }>
          <a onClick={this.handleChange}><span className="glyphicon glyphicon-edit pull-right"></span> </a>
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
  },

  render(){
    if(this.state.edit) return this.noteEditing()
      else return this.noteNormal()
  }
})
