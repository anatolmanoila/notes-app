module.exports = {
  template: require('./NotesList.html'),
  controller: NotesList,
  bindings: {
    notes: '=',
    filter: '<'
  }
};

/** @ngInject */
function NotesList(notesService) {
  this.notesService = notesService;
  this.completeReducer = function (count, note) {
    return note.completed ? count + 1 : count;
  };
}

NotesList.prototype = {

  handleChange: function (id) {
    this.notes = this.notesService.completeNote(id, this.notes);
  },

  handleSave: function (e) {
    if (e.text.length === 0) {
      this.notes = this.notesService.deleteNote(e.id, this.notes);
    } else {
      this.notes = this.notesService.editNote(e.id, e.text, this.notes);
    }
  },

  handleDestroy: function (e) {
    this.notes = this.notesService.deleteNote(e, this.notes);
  }
};
