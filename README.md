college_website
Overview This project is a fully functional College Website built using the MEAN stack (MongoDB, Express.js, Angular, Node.js). It is designed to provide information and resources for students, faculty, and alumni, with a focus on responsiveness, user experience, and scalability.

Features Alumni Registration: Allows alumni to register and manage their details. Chatbot Integration: A chatbot for user interactions and answering queries. Governance & Faculty Pages: Display information about the directors, deans, and faculty with pictures and messages. Student Desk Portal: Offers resources such as exam portals, placement information, NSS, Startup initiatives, and more. Responsive Design: Ensures smooth user experience across all devices. Awards and Recognition: Highlights college awards and achievements. Approval Page: Showcases AICTE, DST Bihar, and other important approvals. Technologies Used Frontend: Angular (vX.X) Bootstrap 5 for responsive design and styling jsPDF and jspdf-autotable for generating PDF reports Backend: Node.js, Express.js Database: MongoDB Chatbot: Built using JavaScript Version Control: Git

Installation Clone the repository: git clone cd college-website-using-angular Install dependencies for both frontend and backend:

npm install cd frontend npm install cd ../backend npm install

Configure the backend:

Create a .env file in the /backend directory. Add the MongoDB connection string and other environment variables as needed. Run the project:

Start the backend server: cd backend npm start Start the Angular frontend:

cd frontend ng serve Usage Once the server and frontend are up and running:

Visit http://localhost:4200 to view the website. Alumni can register, students can access resources, and the chatbot is available for interactions. Future Enhancements Adding real-time notifications for new alumni registrations. Integrating a feedback system for students and alumni. Expanding the chatbot’s capabilities with AI/ML to answer complex queries. Adding a student forum for discussions and collaborations. Contributing Feel free to fork the repository, create feature branches, and submit pull requests! Contributions are always welcome.
