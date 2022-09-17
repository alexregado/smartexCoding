import { Component } from '@angular/core';
import { environment } from 'environments/environment';
import { GetRestaurantsService } from './services/get-restaurants.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private GetRestaurantsService: GetRestaurantsService){ }
  tempResponse: any = new Array;
  restaurants: any = new Array;
  
  

  ngOnInit(){
  }


  


  title = 'Restaurants work!';


}
