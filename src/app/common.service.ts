import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  httpUrl = "http://localhost:3000/users/";
  constructor(private _http:HttpClient) { }
  createUser(user){
    return this._http.post(this.httpUrl,user);
  }
  updateUser(user){
    return this._http.put(this.httpUrl + user.id,user)
  }
  getAllUser(){
    return this._http.get(this.httpUrl);
  }
  deleteUser(user){
    //console.log("http://localhost:3000/users" + user.id)
    return this._http.delete(this.httpUrl + user.id)
  }
}
