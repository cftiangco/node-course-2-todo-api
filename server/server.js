const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//save new something
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength:1,
        trim:true
    },
    completed: {
        type: Boolean,
        default:false
    },
    completedAt: {
        type: Number,
        default:null
    }
});

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log(`Saved Todo: ${doc}`);
// }, (e) => {
//     console.log("Unable to Save Todo" + e);
// });

let newTodo = new Todo({
    text:"     something like this     "
});

newTodo.save().then((doc) => {
    console.log('Document created: ' + doc );
},(e) => {
    console.log(e);
});