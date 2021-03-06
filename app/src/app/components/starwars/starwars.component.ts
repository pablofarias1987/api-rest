import { Component, OnInit } from '@angular/core';
import { StarswarsService } from '../../services/starswars.service';


@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css'],

})
export class StarwarsComponent implements OnInit {
  starswarss = null;
  starswarss2 = null;


  constructor(private starswarsService: StarswarsService) { }

  ngOnInit() {

    this.starswarsService.getStarwars().subscribe(response => {
      this.starswarss = response;
      console.log('response:', response);
    }, error => {
      console.error('error: ', error);
    }, () => {
      console.log('Termine peticion http.');
    });
  
    this.starswarsService.getStarwars2().subscribe(response => {
      this.starswarss2 = response;
      console.log('response:', response);
    }, error => {
      console.error('error: ', error);
    }, () => {
      console.log('Termine peticion http.');
    });
  }

}


