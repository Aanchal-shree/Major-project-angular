import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagesliding',
  templateUrl: './imagesliding.component.html',
  styleUrls: ['./imagesliding.component.css']
})
export class ImageslidingComponent implements OnInit {
  images: { src: string, alt: string, active: boolean }[] = [
    { src: 'assets/college1.jpg', alt: 'Image 1', active: true },
    { src: 'assets/college2.jpg', alt: 'Image 2', active: false },
    { src: 'assets/college3.jpg', alt: 'Image 3', active: false },
    { src: 'assets/college4.jpg', alt: 'Image 4', active: false },
    { src: 'assets/jubliee hall.jpg', alt: 'Image 5', active: false },
    { src: 'assets/college6.png', alt: 'Image 6', active: false }
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

