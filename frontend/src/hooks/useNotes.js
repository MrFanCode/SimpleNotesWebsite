import { useState, useEffect, useCallback } from 'react';
import * as api from '../api';

/**
 * useNotes
 * --------
 * Encapsulates all note state and server interactions.
 * Swap the api.js import to connect to any backend.
 */
export function useNotes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNotes = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.getNotes();
      setNotes(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  const createNote = async (noteData) => {
    await api.addNote(noteData);
    await fetchNotes();
  };

  const updateNote = async (id, noteData) => {
    await api.editNote(id, noteData);
    await fetchNotes();
  };

  const removeNote = async (id) => {
    await api.deleteNote(id);
    await fetchNotes();
  };

  return { notes, loading, error, fetchNotes, createNote, updateNote, removeNote };
}
