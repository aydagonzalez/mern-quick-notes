// import * as usersService from '../../utilities/users-service';
import { useState,useEffect, useRef } from "react";
import * as notesAPI from '../../utilities/notes-api';

// import NewNoteForm from "../NewNoteForm/NewNoteForm"
import NoteListItem from '../../components/NoteListItem/NoteListItem';
import NewNoteForm from '../NewNoteForm/NewNoteForm';
import "./NotesPage.css"

export default function NotesPage({ user, notes, addNote }) {
    const [noteItems, setNoteItems] = useState([]);
    const notesRef = useRef([]);
    useEffect(function() {
        async function getNotes() {
        const notess = await notesAPI.indexNotes()
        notesRef.current = [(noteItems.map(note => note.text))];
        setNoteItems(notess)
    //   console.log('NewOrderPage rendered');
    }
    getNotes()
}, []);

    return (
        <div className='NotesPage'>
            <h1>Notes Page</h1>

            <h1>{user.name} <br />
                {user.createdAt} <br />
                {user.email}
                {/* <h1>Note    {user.notes.text} </h1> */}
                {user.note}
                NOTE:  {user.notes.text}
                NOTE:  {console.log("USER.NOTES.ID", user)}
                NOTE:  {user.notes._id}
                {/* {console.log(user)}
                {console.log(user.notes)}
                {console.log(user.notes[1])} */}
            </h1>
            <NewNoteForm user={user} addNote={addNote} />


            <ul className="NoteList padding-0">
     
                    <NoteListItem notes={notesRef.current}  noteItems={noteItems} />

            </ul>
        </div>

    )
}

