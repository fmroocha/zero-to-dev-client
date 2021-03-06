import NoteActionTypes from "./note.types";

export const fetchUserVideoNotesStart = (videoId) => ({
	type: NoteActionTypes.FETCH_USER_VIDEO_NOTES_START,
	payload: videoId,
});

export const fetchUserVideoNotesSuccess = (notes) => ({
	type: NoteActionTypes.FETCH_USER_VIDEO_NOTES_SUCCESS,
	payload: notes,
});

export const fetchUserVideoNotesFailure = (error) => ({
	type: NoteActionTypes.FETCH_USER_VIDEO_NOTES_FAILURE,
	error,
});

export const addVideoNoteStart = (data) => ({
	type: NoteActionTypes.ADD_VIDEO_NOTE_START,
	payload: data,
});

export const addVideoNoteSuccess = (note) => ({
	type: NoteActionTypes.ADD_VIDEO_NOTE_SUCCESS,
	payload: note,
	successMessage: "A nota foi criada com sucesso!",
});

export const addVideoNoteFailure = (error) => ({
	type: NoteActionTypes.ADD_VIDEO_NOTE_FAILURE,
	error,
});

export const toggleNotesEditable = () => ({
	type: NoteActionTypes.TOGGLE_NOTES_EDITABLE,
});

export const deleteNoteStart = (noteId) => ({
	type: NoteActionTypes.DELETE_NOTE_START,
	payload: noteId,
});

export const deleteNoteSuccess = (note) => ({
	type: NoteActionTypes.DELETE_NOTE_SUCCESS,
	payload: note,
	successMessage: "A nota foi removida com sucesso!",
});

export const deleteNoteFailure = (error) => ({
	type: NoteActionTypes.DELETE_NOTE_FAILURE,
	error,
});

export const updateNoteStart = (data) => ({
	type: NoteActionTypes.UPDATE_NOTE_START,
	payload: data,
});

export const updateNoteSuccess = (note) => ({
	type: NoteActionTypes.UPDATE_NOTE_SUCCESS,
	payload: note,
	successMessage: "A nota foi atualizada com sucesso!",
});

export const updateNoteFailure = (error) => ({
	type: NoteActionTypes.DELETE_NOTE_FAILURE,
	error,
});

export const toggleEditBoxHidden = (noteId) => ({
	type: NoteActionTypes.TOGGLE_EDIT_BOX_HIDDEN,
	payload: noteId,
});
