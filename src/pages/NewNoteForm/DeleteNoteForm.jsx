
import { useState } from "react";
import * as notesAPI from '../../utilities/notes-api';

export default function DeleteNoteForm({ idx, id }) {
    // console.log("ID:",id)
    const [deleteNote, setDeleteNote] = useState('');
    const [error, setError] = useState('');

    async function handleDeleteNote(evt) {
        evt.preventDefault();
        try {

            const deleteNote = await notesAPI.deleteNote(id)
            // console.log('Delete response:', deleteNote);
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

