import { Component, inject, OnInit, Input, OnDestroy } from '@angular/core';
import { moviesdbAPIService } from '../../services/moviesdb.services';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit {

  
  movieService = inject(moviesdbAPIService);
  route = inject(ActivatedRoute);
  sanitizer = inject(DomSanitizer)
  movieID: string = '';

  movie_title: string = '';
  movie_details: string = '';
  movie_video_src: SafeResourceUrl = ''


  getDefaultMovie(){
      const options = {
      language: 'en-US',
      page: '1',
      sort_by: 'popularity.desc',
      include_adult: 'false',
      include_video: 'false'
    }

    this.movieService.getMovies(options)
      .subscribe(res=>{
            //console.log(res);
            this.movieID = res.results[0].id; 
           // console.log(this.movieID);
            this.getMovieDetails(parseInt(this.movieID));
      });
  }

  getMovieDetails(id:number){
    this.movieService.getBannerDetail(id)
              .subscribe(res =>{
                console.log(res);
                this.movie_title = res.title;
                this.movie_details = res.overview;
              });
            this.movieService.getBannerVideo(id)
              .subscribe(res => {
                console.log(res);
                //let movie_key: string = res.results[0].key ?? 'hvL1339luv0';


                let movie_key: string = '';
                if (res.results[0] && res.results[0].key) {
                  movie_key = res.results[0].key;
                } else {
                  movie_key = 'hvL1339luv0'; 
                }

                this.movie_video_src = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${movie_key}?autoplay=1&mute=1&loop=1&controls=0`);
                //console.log(this.movie_video_src);
               
              })
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      this.movieID = params.get('id')!;
    });

    if(this.movieID === '' || this.movieID === null){
      this.getDefaultMovie();
    }
    else{
      this.getMovieDetails(parseInt(this.movieID));
    }
  }
}
  