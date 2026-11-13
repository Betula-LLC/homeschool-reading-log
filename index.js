import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import Book from './schemas/books.js';
import Student from './schemas/student.js';
import Teacher from './schemas/teacher.js';
const app = express();
const port = process.env.PORT || 3001;
const apiKey = process.env.API_KEY;
const mongodbUri = process.env.MONGODB_URI;

if (!apiKey) {
    throw new Error('API_KEY is not set');
}

if (!mongodbUri) {
    throw new Error('MONGODB_URI is not set');
}

mongoose.connect(mongodbUri);

app.get('/', (req, res) => {
    res.send('Reading Log');
});

app.get('/api/health', (req, res) => {
    var status = 'ok';
    res.send(JSON.stringify({ status }));
});

app.get('/api/books', (req, res) => {
    var books = Book.find();
    res.send(JSON.stringify(books));
});

app.get('/api/students', (req, res) => {
    var students = Student.find();
    res.send(JSON.stringify(students));
});

app.get('/api/teachers', (req, res) => {
    var teachers = Teacher.find();
    res.send(JSON.stringify(teachers));
});

app.post('/api/books', (req, res) => {
    var book = new Book(req.body);
    book.save();
    res.send(JSON.stringify(book));
});

app.post('/api/students', (req, res) => {
    var student = new Student(req.body);
    student.save();
    res.send(JSON.stringify(student));
});

app.post('/api/teachers', (req, res) => {
    var teacher = new Teacher(req.body);
    teacher.save();
    res.send(JSON.stringify(teacher));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});