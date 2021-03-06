import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchResults {
  constructor(private http: Http){
    console.log("Venue page loaded");
  }

//function to get the user entered search results
  getUserSearchResults(value:string){
    let url = 'https://api.demo.partaketechnologies.com/api/venue';
    let page=1;
    let limit=20;

    if(value.trim().length!=0){
      // url=url+'?page='+page+'&limit='+limit+'&q='+value;
      url=url+'?q='+value;
        }
    return this.http.get(url)
      .map(res=>{
        var nRes = res.json();
        var  mappedResponse =  nRes.map((val)=>{
             getdistance(val.latitude, val.longitude);

            function getdistance(lat_val,longt_val){

              navigator.geolocation.getCurrentPosition(
                function(position){
                  // console.log(new google.maps.LatLng(position.coords.latitude,position.coords.longitude));
                  let current_loc=new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                  let search_loc=new google.maps.LatLng(lat_val,longt_val);
                  let distance_in_metres=google.maps.geometry.spherical.computeDistanceBetween(current_loc,search_loc);
                  let distance_in_miles=distance_in_metres*0.000621371192;
                  val.distance = distance_in_miles.toFixed(2);
                },
                  function(){
                    alert("Location Unavailable");
                  }
              );
            }
            return val;
        })
        return mappedResponse;
      });
  }

//function to display search results
  getSearchResults(){
    let url = 'https://api.demo.partaketechnologies.com/api/venue';
    // let page=1;
    // let limit=20;
    return this.http.get(url)
      .map(res=>{
        var nRes = res.json();
        var  mappedResponse =  nRes.map((val)=>{
             getdistance(val.latitude, val.longitude);

            function getdistance(lat_val,longt_val){
              navigator.geolocation.getCurrentPosition(
                function(position){
                  let current_loc=new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                  let search_loc=new google.maps.LatLng(lat_val,longt_val);
                  let distance_in_metres=google.maps.geometry.spherical.computeDistanceBetween(current_loc,search_loc);
                  let distance_in_miles=distance_in_metres*0.000621371192;
                  val.distance = distance_in_miles.toFixed(2);
                },
                  function(){
                    alert("Location Unavailable");
                  }
              );
            }
            return val;
        })
        return mappedResponse;
      });
  }


}
