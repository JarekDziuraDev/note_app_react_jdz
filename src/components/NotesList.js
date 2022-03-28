import Note from './Note.js';
import AddNote from './AddNote.js';

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
    const notesList = notes.map((note) => (
        <Note key={note.id} 
        id={note.id}
        text={note.text} 
        date={note.date}
        handleDeleteNote={handleDeleteNote}/>
    ))
    return(
        <div className='notes-list'>
            {notesList}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}

export default NotesList;