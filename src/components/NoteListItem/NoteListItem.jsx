import DeleteNoteForm from "../../pages/NewNoteForm/DeleteNoteForm";


export default function NoteListItem({ noteItems }) {
  
  const notes = noteItems.map((note , idx) =>
    <li >
      {note.text}  - - -  
      {note.createdAt} ----
      <DeleteNoteForm note={note} key={idx} id={note._id} />

    </li>
  );
  return (
    <div >
      <>
      {notes}
      
      </>

      
    </div>
  );
}
