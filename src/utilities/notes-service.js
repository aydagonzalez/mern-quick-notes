import * as notesAPI from './notes-api';


export async function createNote(note) {
  const n = await notesAPI.createNote(note);
  return n  //I dont think we need this here
}

export async function indexNotes(note) {
  const n = await notesAPI.indexNotes(note);
  return n  //I dont think we need this here
}

export async function deleteNote(note) {
  const n = await notesAPI.deleteNote(note);
  return n  //I dont think we need this here
}




