// import * as usersService from '../../utilities/users-service';
import { useState } from "react";
import * as notesService from '../../utilities/notes-service';

import * as notesAPI from '../../utilities/notes-api';


export default function NewNoteForm({ user, addNote }) {
    const [newNote, setNewNote] = useState('');
    const [error, setError] = useState('');

    function handleChange(evt) {
        const { name, value } = evt.target;
        setNewNote({ ...newNote, [name]: value });
        setError('');
    }

    async function handleAddNewNote(evt) {
        evt.preventDefault();
        try {
            addNote(newNote);
            const text = await notesAPI.createNote(newNote)
            const indexNotes = await notesAPI.indexNotes(newNote)
            setNewNote({ text: "" });
        } catch {
            setError('Add Note Failed - Try Again');
        }
    }

    return (
        <div className='NotesPage'>
            {/* <h1>
                {user.name} <br />
                {user.createdAt} <br />
                {user.email}
                {user.note}


            </h1> */}
            <form className="NewNoteForm" onSubmit={handleAddNewNote}>
                <label htmlFor="">Note:</label>
                <input name="text" value={newNote.text} onChange={handleChange} type="text" />
                <button>submit note</button>
            </form>
            <p className="error-message">&nbsp;{error}</p>
        </div>

    )
}

