
import { useState, useEffect, useRef } from "react";
import * as notesAPI from '../../utilities/notes-api';
import NewNoteForm from '../NewNoteForm/NewNoteForm';
import NoteListItem from '../../components/NoteListItem/NoteListItem';

import "./NotesPage.css"

export default function NotesPage({ user }) {
    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes([...notes, note]);
    }

    const notesRef = useRef([]); //Maybe this is not need

    useEffect(function () {
        async function getNotes() {
            const newNote = await notesAPI.indexNotes()
            // console.log("NOTES from USE EFFECT fxn:", newNote)
            // notesRef.current = [(newNote.map(note => note.text))];
            setNotes(newNote)
        }
        getNotes()
    }, []);



    return (
        <main>
            {(notes.length) ?
                <div className='NotesPage'>
                    <h1>{user.name}'s Notes Page</h1>
                    <NewNoteForm user={user} addNote={addNote} />
                    <div className="NoteList-card">
                        <NoteListItem  addNote={addNote} key={user.notes._id} noteItems={notes} />
                    </div>
                </div>

                :
                <>

                    <h2>  "No Notes Yet!"</h2>
                    <NewNoteForm user={user} addNote={addNote} />
                </>


            }
        </main>
    )
}

