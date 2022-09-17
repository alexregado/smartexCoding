import { Component, OnInit } from '@angular/core';
import { Body } from '@angular/http/src/body';
//import { Router } from '@angular/router';
import { GetRestaurantsService } from 'app/services/get-restaurants.service';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
  constructor(private GetRestaurantsService: GetRestaurantsService){ }
// , private router: Router

  userInput = "";
  link: string = "";

  getValue(val: any){
    this.userInput = val;
    console.log(this.userInput);
    this.link = `https://uk.api.just-eat.io/restaurants/bypostcode/${this.userInput}`;
  }

  tempResponse: any = new Array;
  restaurants: any = new Array;

  

  ngOnInit() {
  }

  /*
  ++++++++++++++++++++++++++++++++++++
  ++++++++++++++++++++++++++++++++++++
  ++++++++++++++++++++++++++++++++++++
  ++++++++++++++++++++++++++++++++++++
  ++++++++++++++++++++++++++++++++++++
  PARAR DE APAGAR 
  
  
  */


  scrollToTop(){
    window.scrollBy({top: -1400, behavior: 'smooth'})
  }
  
  errorFromGetRestaurantsService: any;

  onGetUsers(){
    this.GetRestaurantsService.makeRequest(this.link).subscribe(
      (response: any) => {
        console.log(response)
        this.restaurants = response;
        this.restaurants = this.restaurants.Restaurants;
        console.log(this.restaurants);
        this.loadRestFlag = true;
        console.log(response)
        if(response.length == 0){
          alert("Please insert a correct postcode.")
        }
      },
      (error: any) => {this.errorFromGetRestaurantsService = error; alert("Something went wrong, please try again")},
      () => {
        setTimeout(() => {
          window.scrollTo({top: 700, behavior: 'smooth'})
        }, 100); 
      }
    )
  }

  lat: number;
  lng: number;
  baseUrlPC: string;
  currentPostcode: string;
  currentLocation = "";
  count: number = 1;
  loadRestFlag = false;


  getPostal(){
    //UNCOMMENT TO GET REAL LOCATION
    //this.getLocation();


    //INJECTED VALUES TO RETRIEVE DATA FROM THE UK
    this.lat = 51.505866;
    this.lng = -0.125869;
    
    this.baseUrlPC = `https://api.geoapify.com/v1/geocode/reverse?lat=${this.lat}&lon=${this.lng}&apiKey=c47bcd33edc54d33b4c58eed1ec4795a`;


    //GET THE POST CODE OF THE CURRENT LOCATION AND GET THE POSTCODE 
    this.GetRestaurantsService.getPostalcode(this.baseUrlPC).subscribe(
      (response: any) => {
        console.log(response.features[0].properties.postcode);
        this.currentPostcode = response.features[0].properties.postcode;
        this.link = `https://uk.api.just-eat.io/restaurants/bypostcode/${this.currentPostcode}`;
        this.GetRestaurantsService.makeRequest(this.link).subscribe(
          (response: any) => {
            this.restaurants = response;
            this.restaurants = this.restaurants.Restaurants;
            console.log(this.restaurants);
            this.loadRestFlag = true;
          },
          (error: any) => console.log(error),
          () =>{ 
            setTimeout(() => {
              window.scrollTo({top: 700, behavior: 'smooth'})
            }, 100); 
        }
        )
  
        
      },
      (error: any) => console.log(error),
      () => console.log("Done getting users")
    )
  }

  htmlToAdd: string;
  addStars(starVal: number){
    switch(Math.round(starVal)){
      case 1:
        this.htmlToAdd = "⭐️";
      break;
      
      case 2:
        this.htmlToAdd = "⭐️⭐️";
      break;

      case 3:
        this.htmlToAdd = "⭐️⭐️⭐️";
      break;
      
      case 4:
        this.htmlToAdd = "⭐️⭐️⭐️⭐️";
      break;
      
      case 5:
        this.htmlToAdd = "⭐️⭐️⭐️⭐️⭐️";
      break;

      case 6:
        this.htmlToAdd = "⭐️⭐️⭐️⭐️⭐️⭐️";
      break;

      default:
        this.htmlToAdd = "⭐️⭐️⭐️";
    }
  }

}




