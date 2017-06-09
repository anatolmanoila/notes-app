require('es6-shim');

var initialNote = {
  text: 'Complete this challenge! ',
  completed: false,
  id: 0
};

function NotesService() {
}

NotesService.prototype = {
  addNote: function (text, notes) {
    return [
      {
        id: (notes.length === 0) ? 0 : notes[0].id + 1,
        completed: false,
        text: text
      }
    ].concat(notes);
  },

  completeNote: function (id, notes) {
    return notes.map(function (note) {
      return note.id === id ?
        Object.assign({}, note, {completed: !note.completed}) :
        note;
    });
  },

  deleteNote: function (id, notes) {
    return notes.filter(function (note) {
      return note.id !== id;
    });
  },

  editNote: function (id, text, notes) {
    return notes.map(function (note) {
      return note.id === id ?
        Object.assign({}, note, {text: text}) :
        note;
    });
  }

};

module.exports = {
  NotesService: NotesService,
  initialNote: initialNote
};
