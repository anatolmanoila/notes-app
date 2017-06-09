var angular = require('angular');
require('./index.scss');

var app = 'app';
var notes = require('./app/notes/notes');
var AppContainer = require('./app/containers/App');
var Header = require('./app/components/Header');
var NoteTextInput = require('./app/components/NoteTextInput');
var NotesList = require('./app/components/NotesList');
var NoteItem = require('./app/components/NoteItem');

angular
  .module(app, [])
  .service('notesService', notes.NotesService)
  .component('appContainer', AppContainer)
  .component('headerComponent', Header)
  .component('notesList', NotesList)
  .component('noteTextInput', NoteTextInput)
  .component('noteItem', NoteItem);

module.exports = app;
