// import * as usersService from '../../utilities/users-service';
import { useState } from "react";
import * as notesService from '../../utilities/notes-service';
import * as notesAPI from '../../utilities/notes-api';

// import "./NotesPage.css"

export default function DeleteNoteForm({ idx }) {
    // const [newNote, setNewNote] = useState('');
    const [error, setError] = useState('');

    async function handleDeleteNote(evt) {
        evt.preventDefault();
        try {
            const deleteNote = await notesAPI.deleteNote(idx)
        } catch {
            setError('Delete Note Failed - Try Again');
        }
    }

    return (
        <div className='DeleteNoteForm'>
            <form className="DeleteNoteForm" onSubmit={handleDeleteNote}>
                <button>Delete note</button>
            </form>
            <p className="error-message">&nbsp;{error}</p>
        </div>

    )
}

