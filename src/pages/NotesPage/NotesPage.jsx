
import { useState, useEffect, useRef } from "react";
import * as notesAPI from '../../utilities/notes-api';
import NewNoteForm from '../NewNoteForm/NewNoteForm';
import NoteListItem from '../../components/NoteListItem/NoteListItem';

import "./NotesPage.css"

export default function NotesPage({ user }) {
    const [notes, setNotes] = useState([]);

    async function addNote() {
        await getNotes()
        // setNotes([...notes, note]);
    }

    const notesRef = useRef([]); //Maybe this is not need

    async function getNotes() {
        const allNotes = await notesAPI.indexNotes()
        console.log("ALL NOTES:", allNotes)
        // notesRef.current = [(newNote.map(note => note.text))];
        setNotes(allNotes)
    }

    useEffect(function () {

        getNotes()
    }, []);

    useEffect(function(){
        console.log("refreshing")
    }, [notes])



    return (
        <main>
            {(notes.length) ?
                <div className='NotesPage'>
                    <h1>{user.name}'s Notes Page</h1>
                    <NewNoteForm setNotes={setNotes} user={user} addNote={addNote} />
                    <div className="NoteList-card">
                        <NoteListItem setNotes={setNotes} getNotes={getNotes} addNote={addNote} key={user.notes._id} noteItems={notes} />
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

