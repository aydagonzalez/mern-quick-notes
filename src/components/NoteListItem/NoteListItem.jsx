import { useState } from "react";
import DeleteNoteForm from "../../pages/NewNoteForm/DeleteNoteForm";
import UpdateNoteForm from "../../pages/NewNoteForm/UpdateNoteForm";
import "./NoteListItem.css"

export default function NoteListItem({ noteItems, addNote, key, setNotes, getNotes}) {
  const [ascending, setAscending] = useState(true);

  function handleSortNotesByDates(evt) {
    const sortedNotes = [...noteItems].sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return ascending ? dateA - dateB : dateB - dateA;
    })
    addNote(sortedNotes);
    setAscending(!ascending);
  }



  const notes = noteItems.map((note, idx) =>
    <div className="NoteListItem-note" key={idx*5} >
      <h3>
        {new Date(note.createdAt).toLocaleDateString()}&nbsp;
        {new Date(note.createdAt).toLocaleTimeString()} <br />
      </h3>
      <h2>{note.text} </h2>
      <div className="Update-DeleteNoteForms">
        <DeleteNoteForm note={note} key={idx+11} id={note._id} setNotes={setNotes} getNotes={getNotes} />
        <UpdateNoteForm note={note} key={idx+12} id={note._id} addNote={addNote} setNotes={setNotes} getNotes={getNotes} />
      </div>

    </div>
  );
  return (

    <div >
      <button key={"button"} className="Sorting-btn" onClick={handleSortNotesByDates}>
        {ascending ? "Sort Dates Descending" : "Sort Date Ascending"}
      </button>
      {notes}



    </div>



  );
}
