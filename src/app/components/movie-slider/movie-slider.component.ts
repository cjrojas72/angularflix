import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-movie-slider',
  imports: [],
  templateUrl: './movie-slider.component.html',
  styleUrl: './movie-slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MovieSliderComponent {

  @Input() section_title: string = '';
}
