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

        "hi": "Hello! How can I assist you today?",
        "hey": "Hello! How can I assist you today?",
        "good morning": "Good morning! How can I help you today?",
        "namaste": "Namaste! How can I assist you today?",
        "hello": "Hey! How are you?",
        "admission": "The college admission process involves filling out an application form, submitting required documents, and attending an interview. For more details, visit our admissions page.",
        "fees": "The college fees vary by program. Please refer to the fee structure on our website for specific details.",
        "contact": "You can contact the faculty through the contact information provided on their respective department pages on our website.",
        "library": "The library is open from 8 AM to 8 PM on weekdays and from 10 AM to 5 PM on weekends.",
        "syllabus": "The course syllabus is available on the course information page under the academic section of our website.",
        "campus": "The campus features state-of-the-art facilities including modern classrooms, laboratories, and recreational areas. Visit our campus tour page for more information.",
        "events": "Our college hosts various events throughout the year, including seminars, workshops, and cultural activities. Check the events calendar on our website for upcoming events.",
        "scholarships": "We offer a range of scholarships based on merit and need. For more information on available scholarships and application procedures, please visit our scholarships page.",
        "housing": "On-campus housing options are available for students. For details on accommodation types and application procedures, please refer to our housing page.",
        "sports": "The college has a vibrant sports program with facilities for various sports including basketball, soccer, and swimming. Join our sports clubs to get involved.",
        "internships": "We have strong industry connections and offer various internship opportunities. Check with the career services office for assistance with finding internships.",
        "alumni": "Our alumni network is active and provides support in terms of networking and career advice. Visit our alumni page to connect with former students.",
        "faculty": "Our faculty consists of experienced professionals and academics dedicated to providing high-quality education. Learn more about our faculty members on the faculty page.",
        "research": "The college is involved in cutting-edge research across various fields. For information on current research projects and opportunities to participate, visit our research page.",
        "student_life": "Student life at our college includes numerous clubs, societies, and extracurricular activities. Explore the student life section on our website to find out more."
    
    
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
