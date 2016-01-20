this.Notes = React.createClass({
  renderNotes(){
    return this.props.notes.map((note)=>{
      return <Note key={note.id} note={note} />
    });
  },

  render(){
    return(
      <div className='notes'>
        <h2 className='title'> Note </h2>
        {this.renderNotes()}
      </div>
    )
  }
})
