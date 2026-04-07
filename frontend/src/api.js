/**
 * api.js
 * ------
 * All backend calls live here. To reuse this frontend with a different
 * backend, only this file needs updating: change BASE_URL and the
 * endpoint paths in each function.
 */

const BASE_URL = 'http://127.0.0.1:8000';

async function request(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

export const getNotes = () =>
  request('/notes/');

export const addNote = (note) =>
  request('/notes/add-note', {
    method: 'POST',
    body: JSON.stringify(note),
  });

export const editNote = (id, note) =>
  request(`/notes/edit-note/${id}`, {
    method: 'POST',
    body: JSON.stringify(note),
  });

export const deleteNote = (id) =>
  request(`/notes/delete-note/${id}`, {
    method: 'POST',
  });
