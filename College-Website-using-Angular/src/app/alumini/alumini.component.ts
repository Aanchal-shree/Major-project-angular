import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumini',
  templateUrl: './alumini.component.html',
  styleUrls: ['./alumini.component.css']
})
export class AluminiComponent implements OnInit {
  images: { src: string, alt: string, active: boolean }[] = [
    { src: 'assets/Alumni poster.png', alt: 'Image 1', active: true },
    { src: 'assets/alumni sheet 2_page-0001.jpg', alt: 'Image 2', active: false }
  ];

  c = 0;

  ngOnInit() {
    setInterval(() =>
     {
      this.images[this.c].active = false;
      this.c = (this.c + 1) % this.images.length;
      this.images[this.c].active = true;
    }, 2000);
  }
}
