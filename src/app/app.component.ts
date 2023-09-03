import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  group,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [animate(1000)]),
      transition('*=>void', [animate(500)]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'gallery-project';
  images: String[] = [
    'car-img-1.jpg',
    'city-night.jpg',
    'corner-building.jpg',
    'metro-station.jpg',
    'river-city-img.jpg',
    'underpass.jpg',
  ];

  animatedImages: String[] = [];

  ngOnInit(): void {
    this.animateElements();
  }

  animateElements() {
    const delay = 100; //ms
    this.images.forEach((element, index) => {
      setTimeout(() => {
        this.animatedImages.push(element);
      }, delay * index);
    });
  }

  removeElement(element: String) {
    const index = this.images.indexOf(element);
    if (index !== -1) {
      this.images.splice(index, 1);
    }
  }
}
