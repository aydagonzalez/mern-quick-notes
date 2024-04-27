import DeleteNoteForm from "../../pages/NewNoteForm/DeleteNoteForm";
import UpdateNoteForm from "../../pages/NewNoteForm/UpdateNoteForm";
import "./NoteListItem.css"

export default function NoteListItem({ noteItems, addNote  }) {
  
  const notes = noteItems.map((note , idx) =>
    <div className="NoteListItem-note" >
      {note.text}  - - -  &nbsp; 
      {new Date(note.createdAt).toLocaleDateString()}&nbsp; 
      {new Date(note.createdAt).toLocaleTimeString()}&nbsp; 
      <div className="Update-DeleteNoteForms">
      <DeleteNoteForm note={note} key={idx} id={note._id} />
      <UpdateNoteForm note={note} key={idx} id={note._id} addNote={addNote} />
      </div>

    </div>
  );
  return (
  
      <div >
      {notes}
      
      </div>

      

  );
}
