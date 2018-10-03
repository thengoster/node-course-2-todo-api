const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('5bb4ecc1f0ea5e8d3252c0f8').then((todo) => {
  console.log(todo);
});
