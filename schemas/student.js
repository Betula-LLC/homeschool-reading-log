import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
    name: { type: String, required: true },
    parentEmail: { type: String, required: true }
});

const Student = mongoose.model('Student', studentSchema);

export default Student;