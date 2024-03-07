import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-show-roles-status',
  templateUrl: './show-roles-status.component.html',
  styleUrl: './show-roles-status.component.css'
})
export class ShowRolesStatusComponent {
  @ViewChild('asTitle') title?:ElementRef;
  @ViewChild('asImage') image?:ElementRef;
  //public user:RoleUser;
  //public data: Array<DataModel> = [];

  public user:any;
  public data: Array<any> = [];
  public show_data:any = [];

  public user1 = {
    scopes:['write'],
    name:'I am writer'
  }

  public user2 = {
    scopes:['read'],
    name:'I am reader'
  }

  public user3 = {
    scopes:['write', 'read'],
    name:'I am User and Admin'
  }

  constructor(private userService:UserServiceService){

  }

  ngOnInit(): void {

    this.user = {
      scopes:[],
      name: 'Role Data Empty'
    }

    this.data = [
      {
        text: '',
        role: ['write'],
        url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTVqcWJtMDVqb3puYXdoY2JwczE5dG1oZTgyemRvZW96OHVzejVtZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xUNd9FOSgUDmfVZ78I/giphy.gif'
      },
      {
        text: '',
        role: ['read'],
        url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTVqcWJtMDVqb3puYXdoY2JwczE5dG1oZTgyemRvZW96OHVzejVtZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26tk0jALFpsXmAF8c/giphy.gif'
      }
    ]


  }

  sendPermission(num:number){
    this.show_data = [];
    if(num == 1){
      this.user = this.user1;
      this.show_data.push([this.data[0]]);
    }else if(num == 2){
      this.user = this.user2;
      this.show_data.push([this.data[1]]);
    }else if(num == 3){
      this.user = this.user3;
      this.show_data.push(this.data);
    }

    localStorage.setItem('user', JSON.stringify(this.user));

  }
}
