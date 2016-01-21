this.Notes = React.createClass({
  renderNotes(){
    return this.props.notes.map((note)=>{
      return <Note key={note.id} note={note} />
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
