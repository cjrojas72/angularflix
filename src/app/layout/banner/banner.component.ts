import { Component, inject, OnInit } from '@angular/core';
import { moviesdbAPIService } from '../../services/moviesdb.services';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit {

  movieService = inject(moviesdbAPIService)


  ngOnInit(): void {
    
    const options = {
      language: 'en-US',
      page: '1',
      sort_by: 'popularity.desc',
      include_adult: 'false',
      include_video: 'false'
    }

    this.movieService.getMovies(options)
      .subscribe(res=>{
        console.log(res);
      })
  }
}
