import { useState } from "react";
import DeleteNoteForm from "../../pages/NewNoteForm/DeleteNoteForm";
import UpdateNoteForm from "../../pages/NewNoteForm/UpdateNoteForm";
import "./NoteListItem.css"

export default function NoteListItem({ noteItems, addNote }) {
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
    <div className="NoteListItem-note" >
      <h3>
        {new Date(note.createdAt).toLocaleDateString()}&nbsp;
        {new Date(note.createdAt).toLocaleTimeString()} <br />
      </h3>
      <h2>{note.text} </h2>
      <div className="Update-DeleteNoteForms">
        <DeleteNoteForm note={note} key={idx} id={note._id} />
        <UpdateNoteForm note={note} key={idx} id={note._id} addNote={addNote} />
      </div>

    </div>
  );
  return (

    <div >
      <button className="Sorting-btn" onClick={handleSortNotesByDates}>
        {ascending ? "Sort Dates Descending" : "Sort Date Ascending"}
      </button>
      {notes}



    </div>



  );
}
