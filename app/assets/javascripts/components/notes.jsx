this.Notes = React.createClass({
  updateNote(note, data){
    this.props.handleEditNotes(note, data);
  },
  renderNotes(){
    return this.props.notes.map((note)=>{
      return <Note key={note.id} note={note} handleEditNote={this.updateNote} />
    });
  },

  render(){
    return(
      <div className='notes panel-group' id='accordion' role='tablist' aria-multiselectable='true'>
        {this.renderNotes()}
      </div>
    )
  }
})
