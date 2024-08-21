import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  director = {
    name: 'Prof. Prem Mohan Mishra',
    position: 'Director, Dr. APJAKWIT',
    image: 'assets/director.jpg',
    message: 'We believe in the holistic development of our students, where academic rigor is balanced with opportunities for personal growth and leadership. Our faculty, who are experts in their respective fields, are dedicated to mentoring you and guiding you on your educational journey.'
  };

  facultyList = [
    {
      name: 'Dr. Brajesh Kumar',
      position: 'Professor of Computer Science',
      image: 'assets/faculty1.jpg',
      details: 'Expert in Artificial Intelligence and Machine Learning.'
    },
    {
      name: 'Dr. Pankaj Kumar Chaudhary',
      position: 'Assistant Professor of Mathematics',
      image: 'assets/faculty2.jpg',
      details: 'Specializes in Applied Mathematics and Data Analysis.'
    },
    {
      name: 'Dr. Snatosh Kumar',
      position: 'Assistant Professor of Computer Science',
      image: 'assets/faculty3.jpg',
      details: 'Specializes in DBMS, Information Security, and Automata Theory.'
    },
    {
      name: 'Dr. Rashmi Kumari',
      position: 'Assistant Professor of Management',
      image: 'assets/faculty3.jpg',
      details: 'Specializes in Management and Human Resources.'
    },
    {
      name: 'Dr. Amit Mishra ',
      position: 'Assistant Professor of Computer Science',
      image: 'assets/faculty3.jpg',
      details: 'Specializes in Compiler Design and Computer Architecture.'
    },
    {
      name: 'Dr. Aashish Kumar',
      position: 'Assistant Professor of Mechanical',
      image: 'assets/faculty3.jpg',
      details: 'Specializes in Mechanics.'
    },
    {
      name: 'Dr. Ritu',
      position: 'Assistant Professor of Electrical',
      image: 'assets/faculty3.jpg',
      details: 'Specializes in Electrical Engineering.'
    },
    {
      name: 'Dr. Chitra ',
      position: 'Assistant Professor of English',
      image: 'assets/faculty3.jpg',
      details: 'Specializes in english literature.'
    },
    {
      name: 'Dr. Nisha Saxena',
      position: 'Assistant Professor of Chemistry',
      image: 'assets/faculty3.jpg',
      details: 'Specializes in engineering chemistry.'
    },
    // Add more faculty members as needed
  ];
}
