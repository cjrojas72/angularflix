import { Component } from '@angular/core';
import { BannerComponent } from '../../layout/banner/banner.component';
import { MovieSliderComponent } from '../../components/movie-slider/movie-slider.component';

@Component({
  selector: 'app-home',
  imports: [BannerComponent, MovieSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
