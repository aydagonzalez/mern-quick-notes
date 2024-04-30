import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function createNote(note) {
  console.log("creating")
  return sendRequest(BASE_URL, 'POST', note)
}

export async function indexNotes() {
  console.log("getting")
  return sendRequest(BASE_URL, 'GET')
}

export async function deleteNote(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}

export async function updateNote({id, edit} ) {
  console.log("id, edit:", id, edit)
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', edit)
}
