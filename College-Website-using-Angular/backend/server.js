const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const alumniRoutes = require('./routes/alumni');  // Path to the routes

const app = express();

// Middleware
app.use(express.json());
app.use(cors());  // Enable CORS for all requests

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/yourDBName', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB is connected'))
  .catch(err => console.log(err));

// Define keywords and responses
const keywordResponses = {
    "hello":"Hey! How are you?",
    "admission": "The college admission process involves filling out an application form, submitting required documents, and attending an interview. For more details, visit our admissions page.",
    "fees": "The college fees vary by program. Please refer to the fee structure on our website for specific details.",
    "contact": "You can contact the faculty through the contact information provided on their respective department pages on our website.",
    "library": "The library is open from 8 AM to 8 PM on weekdays and from 10 AM to 5 PM on weekends.",
    "syllabus": "The course syllabus is available on the course information page under the academic section of our website."
};

// Chatbot logic (keyword-based)
const chatbotResponse = (message) => {
    let response = "I'm sorry, I don't understand that. Could you please rephrase?";

    // Check for keywords in the user's message
    const lowerCaseMessage = message.toLowerCase();
    for (const [keyword, reply] of Object.entries(keywordResponses)) {
        if (lowerCaseMessage.includes(keyword)) {
            response = reply;
            break;  // Respond with the first matching keyword response
        }
    }

    return response;
};

// Chatbot endpoint
app.post('/api/chatbot', (req, res) => {
    const userMessage = req.body.message;

    // Generate chatbot response
    const botMessage = chatbotResponse(userMessage);

    // Send response
    res.send({ botMessage });
});

// Basic route for testing
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Routes
app.use('/api/alumni', alumniRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'An error occurred!', error: err.message });
});

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
