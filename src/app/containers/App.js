var notes = require('../notes/notes');

module.exports = {
  template: require('./App.html'),
  controller: App
};

function App() {
  this.notes = [notes.initialNote];
}
