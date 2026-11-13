import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    school: { type: String, required: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reader' }]
});

const Teacher = mongoose.model('Teacher', teacherSchema);

export default Teacher;