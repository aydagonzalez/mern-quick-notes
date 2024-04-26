import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function createNote(note) {
  return sendRequest(BASE_URL, 'POST', note)
}

export async function indexNotes(note) {
  return sendRequest(BASE_URL, 'get', note)
}
