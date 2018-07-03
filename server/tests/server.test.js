const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

describe('POST /todos', () =>{
    it('Should create a new todo', (done) => {
        var text = 'Test todo text';

        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect(() => {
            expect(res.body.test).toBe(text);
        })
        .end((err, res) => {
            if(err) {
               return done(err);
            }

            Todo.find().then((todos)  => {
                expect(todos.length).toBe(1)
                expect(todo[0].text).toBe(text);
                done();
            }).catch((e) => {

            });
        });
    });
});