import DeleteNoteForm from "../../pages/NewNoteForm/DeleteNoteForm";


export default function NoteListItem({ noteItems }) {
  
  const notes = noteItems.map((note , idx) =>
    <li >
      {note.text}  - - -  
      {note.createdAt}
      {/* <DeleteNoteForm note={note} idx={idx} /> */}

      {console.log("noteCat:", note)}
    </li>
  );
  return (
    <div className="">
      {notes}
    </div>
  );
}
