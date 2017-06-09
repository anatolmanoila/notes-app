module.exports = {
  template: require('./Header.html'),
  controller: Header,
  bindings: {
    notes: '='
  }
};

/** @ngInject */
function Header(notesService) {
  this.notesService = notesService;
}

Header.prototype = {
  handleCreate: function (text) {
    if (text.length !== 0) {
      this.notes = this.notesService.addNote(text, this.notes);
    }
  }
};
