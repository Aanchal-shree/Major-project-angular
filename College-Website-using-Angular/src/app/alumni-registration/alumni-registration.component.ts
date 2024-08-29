import { Component } from '@angular/core';
import { AlumniService } from '../alumni.service';

@Component({
  selector: 'app-alumni-registration',
  templateUrl: './alumni-registration.component.html',
  styleUrls: ['./alumni-registration.component.css']  // Optional for CSS
})
export class AlumniRegistrationComponent {

  alumni = {
    name: '',
    email: '',
    phone: '',
    graduationYear: null,
    message: ''
  };

  constructor(private alumniService: AlumniService) { }

  onSubmit() {
    this.alumniService.registerAlumni(this.alumni).subscribe(
      response => alert('Alumni registered successfully!'),
      error => alert('Error registering alumni')
    );
  }
}
