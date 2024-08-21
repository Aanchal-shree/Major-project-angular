import { Component } from '@angular/core';

@Component({
  selector: 'app-student-desk',
  templateUrl: './student-desk.component.html',
  styleUrls: ['./student-desk.component.css']
})
export class StudentDeskComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
