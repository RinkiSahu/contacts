import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import { CommonService } from './common.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'Contact List';
  allUser: Object;
  isEdit = false;
  searchName:string = "";
  userObj = {
    name:'',
    contact: '',
    email: '',
    id:''
  }
  constructor(private commonService:CommonService){}
  ngOnInit(){
    this.getLatestUser();
  }

  addUser(formObj){
    console.log(formObj)
    this.commonService.createUser(formObj).subscribe((response) =>{
      
     this.getLatestUser()

     
    })
  }
getLatestUser(){
  this.commonService.getAllUser().subscribe((response) =>{
    this.allUser = response;
  })
}
editUser(user){
  this.isEdit = true;
  this.userObj = user;

}
deleteUser(user){
  this.commonService.deleteUser(user).subscribe(() => {
    //console.log(this.getLatestUser())
    } )
}

updateUser(){
  this.isEdit = !this.isEdit;
  this.commonService.updateUser(this.userObj).subscribe(() =>{
    this.getLatestUser();
  });
}

}