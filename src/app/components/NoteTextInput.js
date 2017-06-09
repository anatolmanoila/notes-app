module.exports = {
  template: require('./NoteTextInput.html'),
  controller: NoteTextInput,
  bindings: {
    onCreate: '&',
    placeholder: '@',
    newNote: '@',
    editing: '@',
    text: '<'
  }
};

/** @ngInject */
function NoteTextInput(notesService, $window, $timeout) {
  this.notesService = notesService;
  this.$timeout = $timeout;
  this.$window = $window;
  this.editing = this.editing || false;
  this.text = this.text || '';
  if (this.text.length) {
    this.focus();
  }
}

NoteTextInput.prototype = {
  handleBlur: function () {
    if (!this.newNote) {
      this.onCreate({text: this.text});
    }
  },

  handleSubmit: function (e) {
    if (e.keyCode === 13) {
      this.onCreate({text: this.text});
      if (this.newNote) {
        this.text = '';
      }
    }
  },

  focus: function () {
    this.$timeout(function () {
      var element = this.$window.document.querySelector('.editing .textInput');
      if (element) {
        element.focus();
      }
    }, 0);
  }
};
