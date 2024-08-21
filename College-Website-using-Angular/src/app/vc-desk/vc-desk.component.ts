import { Component } from '@angular/core';

@Component({
  selector: 'app-vc-desk',
  templateUrl: './vc-desk.component.html',
  styleUrls: ['./vc-desk.component.css']
})
export class VcDeskComponent {
  vcName: string = 'Prof. S.K. Chaudhary';
  vcMessage: string = 'Welcome to the VC Desk. Here, we strive to provide excellent support and guidance for the development of the college.';

  constructor() {}
}
