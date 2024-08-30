const mongoose = require('mongoose');

const AlumniSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    graduationYear: { type: Number, required: true },
    message: { type: String, required: false },
});

const Alumni = mongoose.model('Alumni', AlumniSchema);
module.exports = Alumni;
