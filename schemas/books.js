import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true },
    isbn: { type: String, required: true },
    dateAdded: { type: Date, default: Date.now },
    dateStarted: { type: Date },
    dateFinished: { type: Date },
    page: { type: Number, required: false },
    totalPages: { type: Number, required: false },
});

const Book = mongoose.model('Book', bookSchema);

export default Book;