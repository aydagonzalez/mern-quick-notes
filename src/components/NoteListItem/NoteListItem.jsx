import DeleteNoteForm from "../../pages/NewNoteForm/DeleteNoteForm";
import UpdateNoteForm from "../../pages/NewNoteForm/UpdateNoteForm";


export default function NoteListItem({ noteItems, addNote  }) {
  
  const notes = noteItems.map((note , idx) =>
    <div >
      {note.text}  - - -  &nbsp; 
      {new Date(note.createdAt).toLocaleDateString()}&nbsp; 
      {new Date(note.createdAt).toLocaleTimeString()}&nbsp; 
      <DeleteNoteForm note={note} key={idx} id={note._id} />
      <UpdateNoteForm note={note} key={idx} id={note._id} addNote={addNote} />

    </div>
  );
  return (
  
      <div >
      {notes}
      
      </div>

      

  );
}
