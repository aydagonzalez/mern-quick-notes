// This is the base path of the Express route we'll define
import sendRequest from "./send-request";
const BASE_URL = '/api/users';
// const LOGIN_URL = '/api/users/login';

export async function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData)
  // // Fetch uses an options object as a second arg to make requests
  // // other than basic GET requests, include data, headers, etc. 
  // const res = await fetch(BASE_URL, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(userData)
  //   // Fetch requires data payloads to be stringified
  //   // and assigned to a body property on the options object
  // });
  // // Check if request was successful
  // if (res.ok) {
  //   // res.json() will resolve to the JWT
  //   return res.json();
  // } else {
  //   throw new Error('Invalid Sign Up');
  // }
}

export async function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials)

  // const res = await fetch(LOGIN_URL, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(credentials)
  //   // Fetch requires data payloads to be stringified
  //   // and assigned to a body property on the options object
  // });
  // // Check if request was successful
  // if (res.ok) {
  //   // res.json() will resolve to the JWT
  //   return res.json();
  // } else {
  //   throw new Error('Invalid Log In');
  // }
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}