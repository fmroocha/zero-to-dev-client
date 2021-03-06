import { createSelector } from "reselect";

const selectNote = (state) => state.note;

export const selectUserVideoNotes = createSelector(
	[selectNote],
	(note) => note.userVideoNotes
);

export const selectNotesEditable = createSelector(
	[selectNote],
	(note) => note.editable
);

export const selectEditBoxHidden = createSelector(
	[selectNote],
	(note) => note.editBoxHidden
);

export const selectNoteBeingEdited = createSelector([selectNote], (note) =>
	note ? note.noteBeingEdited : null
);
