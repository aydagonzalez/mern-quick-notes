// import * as usersService from '../../utilities/users-service';
import { useState } from "react";

// import "./NotesPage.css"

export default function NewNoteForm({ user, addNote }) {
    const [newNote, setNewNote] = useState({
        text: "",
    });
    const [error, setError] = useState('');

    function handleChange(evt) {
        const { name, value } = evt.target;
        setNewNote({ ...newNote, [name]: value });
    }

    async function handleAddNewNote(evt) {
        evt.preventDefault();
        try {
            addNote(newNote);
            setNewNote({ text: "" });
        } catch {
            setError('Add Note Failed - Try Again');
        }
    }


    return (
        <div className='NotesPage'>
            <h1>
                {user.name} <br />
                {user.createdAt} <br />
                {user.email}
                {user.note}


            </h1>
            <form className="NewNoteForm" onSubmit={handleAddNewNote}>
                <label htmlFor="">Note:</label>
                <input name="text" value={newNote.text} onChange={handleChange} type="text" />
                <button>submit note</button>
            </form>
            <p className="error-message">&nbsp;{error}</p>
        </div>

    )
}

