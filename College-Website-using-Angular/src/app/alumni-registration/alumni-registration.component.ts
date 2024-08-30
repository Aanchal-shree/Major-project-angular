import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlumniService } from '../alumni.service';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-alumni-registration',
  templateUrl: './alumni-registration.component.html',
  styleUrls: ['./alumni-registration.component.css']
})
export class AlumniRegistrationComponent {

  alumni = {
    name: '',
    email: '',
    phone: '',
    graduationYear: null as number | null,
    message: ''
  };
  currentYear: number;
  isRegistered = false; // Flag to track registration status

  constructor(private alumniService: AlumniService) {
    this.currentYear = new Date().getFullYear();
  }
  
  ngOnInit(): void {
    // Initialization logic if needed
  }

  validateGraduationYear(): boolean {
    if (this.alumni.graduationYear && this.alumni.graduationYear > this.currentYear) {
      alert('Graduation year cannot be greater than the current year.');
      return false;
    }
    return true;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^\d{10}$/;

    if (!emailPattern.test(this.alumni.email)) {
      alert('Invalid email format.');
      return;
    }

    if (!phonePattern.test(this.alumni.phone)) {
      alert('Phone number must be a 10-digit number.');
      return;
    }

    if (!this.validateGraduationYear()) {
      return;
    }

    this.alumniService.registerAlumni(this.alumni).subscribe(
      response => {
        alert('Alumni registered successfully!');
        this.isRegistered = true; // Set flag to true on successful registration
      },
      error => alert('Error registering alumni')
    );
  }

  downloadDetails() {
    const doc = new jsPDF();
  
    // Set background color to white
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'F');
  
    // Define the position and size for the logo
    const logoX = 10;
    const logoY = 10;
    const logoWidth = 30;
    const logoHeight = 15;
  
    // Draw a light green background for the logo
    doc.setFillColor(204, 255, 204);
    doc.rect(logoX - 5, logoY - 5, logoWidth + 10, logoHeight + 10, 'F');
  
    // Add college logo
    doc.addImage('assets/logo_wit.png', 'PNG', logoX, logoY, logoWidth, logoHeight);
  
    // Helper function to center text
    const centerText = (text: string, y: number, fontSize: number) => {
      const pageWidth = doc.internal.pageSize.getWidth();
      doc.setFontSize(fontSize);
      const textWidth = doc.getTextWidth(text);
      const x = (pageWidth - textWidth) / 2;
      return x;
    };
  
    // Add college name as header with underline
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 102, 204);
    const collegeNameX = centerText('DR. APJAKWIT, DBG', 16, 18);
    doc.text('DR. APJAKWIT, DBG', collegeNameX, 16);
  
    // Underline the college name
    doc.setLineWidth(0.5);
    doc.line(collegeNameX - 10, 18.5, collegeNameX + doc.getTextWidth('DR. APJAKWIT, DBG') + 10, 18.5);
  
    // Add university line
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text('Lalit Narayan Mithila University', collegeNameX, 20);
  
    // Add title with styling
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    const titleX = centerText('Registration Details', 40, 18);
    doc.text('Registration Details', titleX, 40);
    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
  
    // Add text with styling
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
  
    // Function to add centered text with label
    const addCenteredText = (label: string, value: string, y: number) => {
      const labelX = centerText(label, y, 14) - 20;
      const valueX = centerText(value, y, 14) + 30;
      doc.text(label, labelX, y);
      doc.setFont("helvetica", "normal");
      doc.text(value, valueX, y);
    };
  
    addCenteredText('Name:', this.alumni.name || 'N/A', 60);
    addCenteredText('Email:', this.alumni.email || 'N/A', 70);
    addCenteredText('Phone:', this.alumni.phone || 'N/A', 80);
    addCenteredText('Graduation Year:', this.alumni.graduationYear?.toString() || 'N/A', 90);
    addCenteredText('Message:', this.alumni.message || 'N/A', 100);
  
    // Add alumni community message with dynamic name
    const alumniMessage = `Dear ${this.alumni.name || 'Esteemed Alumni'},\n\nAs we celebrate another year of accomplishments and growth, we want to take a moment to express our heartfelt gratitude to you. Your success and contributions, both in your personal and professional lives, reflect the values and spirit instilled during your time at our college.\n\nYour achievements continue to inspire current students and faculty alike. The bond we share transcends time and distance, and we are incredibly proud of the remarkable paths you have forged. Whether through professional success, community service, or personal milestones, your efforts are a testament to the strength and caliber of our alumni community.\n\nWe cherish the memories of your time here and look forward to hearing more about your future endeavors. Your engagement and support play a vital role in the ongoing success of our institution, and we are grateful for the connections we maintain with you.\n\nThank you for being a shining example of what it means to be a part of our college family. Together, we continue to grow and achieve great things.\n\nWith warmest regards,\n\nDR. APJAKWIT, Darbhanga`;
  
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);
    doc.text(alumniMessage, 10, 110, { maxWidth: 190 });
  
    // Add social media box in the footer
    const footerY = 240;
    const boxX = 10;
    const boxY = footerY;
    const boxWidth = 190;
    const boxHeight = 40;
    doc.setFillColor(240, 240, 240);
    doc.rect(boxX, boxY, boxWidth, boxHeight, 'F');
  
    // Add social media labels inside the box
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    const socialMediaLabelX = centerText('Stay Connected:', boxY + 10, 12);
    doc.text('Stay Connected:', socialMediaLabelX, boxY + 15);
  
    // Add social media links
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text('Facebook: www.facebook.com/witdarbhanga?mibextid=ZbWKwL', boxX + 10, boxY + 25);
    doc.text('Twitter: www.x.com/ApjakwitNss?t=v8dj1pnYtZ6HwfwF3DMrmQ&s=09', boxX + 10, boxY + 30);
    doc.text('Instagram: www.instagram.com/apjak.wit/', boxX + 10, boxY + 35);
    doc.text('LinkedIn : www.linkedin.com/company/training-and-placement-cell-dr-apjak-wit-darbhanga/', boxX + 10, boxY + 40);
    
    // Add thank you message above the social media box
    doc.setFontSize(12);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(0, 102, 204);
    const footerMessageX = centerText('Thank you for being a part of our college community!', footerY - 10, 12);
    doc.text('Thank you for being a part of our college community!', footerMessageX, footerY - 10);
  
    // Save the PDF
    doc.save('registration-details.pdf');
  }
}
