import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ingredient } from '../classes/ingredient';
import { error } from 'util';


//set these headers later on referenced in postIngredient
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class PantryWebService {
  //need to change these
  postUrl: string = "http://localhost:8088/EZRecipes/api/user/pantry/update";
  getUrl: string = "http://localhost:8080/EZRecipes/api/user/pantry/1"

  constructor(private http:HttpClient ) { }
  
  //used to post an ingredient when selected
  postIngredient(ingredient: Ingredient): Observable<Ingredient>{
    // need to change httpOptions
    return this.http.post<Ingredient>(this.postUrl, ingredient, httpOptions)
    .pipe(
      catchError(this.handleError('addIngredient', ingredient))
    );
  }

  //handle an error
  handleError(arg0: string, ingredient: Ingredient): (err: any, caught: Observable<Ingredient>) => import("rxjs").ObservableInput<any> {
    console.log(error);
    throw new Error("Unable to add ingredient");
  }


  getCurrentIngredients(){
    return this.http.get(this.getUrl)
  }
}
