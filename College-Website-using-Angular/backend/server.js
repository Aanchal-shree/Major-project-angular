// const express = require('express');
// const mongoose = require('mongoose');
// const alumniRoutes = require('./routes/alumni');  // Path to the routes

// const app = express();

// // Middleware
// app.use(express.json());

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/yourDBName', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log('MongoDB is connected'))
//   .catch(err => console.log(err));

// // Routes
// app.use('/api/alumni', alumniRoutes);

// // Server setup
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
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

// Chatbot logic (simple rule-based)
const chatbotResponse = (message) => {
    let response;

    if (message.toLowerCase().includes('hello')) {
        response = 'Hi there! How can I assist you today?';
    } else if (message.toLowerCase().includes('help')) {
        response = 'Sure, I am here to help. What do you need assistance with?';
    } else {
        response = "I'm sorry, I don't understand that. Could you please rephrase?";
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
