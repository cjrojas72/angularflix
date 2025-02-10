import { Component, CUSTOM_ELEMENTS_SCHEMA, input, Input, OnInit } from '@angular/core';
import { vidContent } from '../../models/moviedbVideo.interface';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { moviesdbAPIService } from '../../services/moviesdb.services';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-slider',
  imports: [CommonModule],
  templateUrl: './movie-slider.component.html',
  styleUrl: './movie-slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MovieSliderComponent implements OnInit {

  @Input() videoContents: string = '';
  @Input() section_title: string = '';
  @Input() options: any = {};

  content: vidContent[] = [];


  constructor(private mdbAPIService: moviesdbAPIService, private router: Router) {}

  ngOnInit(): void {
    if(this.mdbAPIService){
      this.fetchVidContent();
    }
  }

  goToMovie(id: number){
    this.router.navigate(['/movie', id]);
  }

  
  fetchVidContent(){
    const paramsObj = { ...this.options }; 

    switch (this.videoContents) {
      case 'popularMovies':
        this.mdbAPIService.getPopularMovies(paramsObj).subscribe(data => {
          this.content = data.results;

          console.log(this.content);
        });
        break;

      case 'topRatedMovies':
        this.mdbAPIService.getTopRated(paramsObj).subscribe(data => {
          this.content = data.results;
        });
        break;

      case 'upcomingMovies':
        this.mdbAPIService.getUpcomingMovies(paramsObj).subscribe(data => {
          this.content = data.results;
        });
        break;

      case 'nowPlayingMovies':
        this.mdbAPIService.getNowPlaying(paramsObj).subscribe(data => {
          this.content = data.results;
        });
        break;


        case 'tvShows':
          this.mdbAPIService.getTvShows(paramsObj).subscribe(data => {
            this.content = data.results;
          });
          break;

      default:
        console.error(`Invalid videoContents value: ${this.videoContents}`);
        break;
    }
  }

    
  }
