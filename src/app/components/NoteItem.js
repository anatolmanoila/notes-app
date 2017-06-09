module.exports = {
  template: require('./NoteItem.html'),
  controller: NoteItem,
  bindings: {
    note: '<',
    onDestroy: '&',
    onChange: '&',
    onSave: '&'
  }
};

function NoteItem() {
  this.editing = false;
}

NoteItem.prototype = {
  handleDoubleClick: function () {
    this.editing = true;
  },

  handleSave: function (text) {
    this.onSave({
      note: {
        text: text,
        id: this.note.id
      }
    });
    this.editing = false;
  },

  handleDestroy: function (id) {
    this.onDestroy({id: id});
  }
};
