import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isDropdownOpen = false;

  toggleDropdown(event: Event): void {
    event.preventDefault(); // Prevents default anchor behavior
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
