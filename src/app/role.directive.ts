import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective {

  private currentUser:any;
  private permissions:any = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private UserService:UserServiceService
  )
  {

  }

  ngOnInit():void {
    this.identity();
    this.updateView();
  }

  //this setter must have the same name as directive's selector
  //designed to interacting with the Angular component
  @Input()
  set appRole(val: Array<string>){
    //console.log(` ****`, val);
    this.identity();
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.permissions = val;
    this.updateView();
  }

  private updateView():void{
    //clean the container
    this.viewContainer.clear();
    //the app gets the role permission and shows or hides relevant information
    if(this.checkPermission()){//true or false
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  private checkPermission():boolean{
    let hasPermission = false;//this function inits as false


    if(this.currentUser && this.currentUser.scopes){
      //scopes is an array USER scopes:['write'] or scopes:['read']

      //It got each permission:this.permissions from the last setter set appRole(val: Array<string>)
      for(const checkPermission of this.permissions){
        //All: It Checks each permission from user logged and campare ir against directive permissions 'user'=>['user'], 'user'=>['admin']
        //DATA scopes: ['write']

        //comparing USER scopes against DATA scopes
        const permissionFound = this.currentUser.scopes.find((p:string)=>{
          return (p.toUpperCase() === checkPermission.toUpperCase());
        });

        if(permissionFound){
          //console.log("This user has permissions", permissionFound);
          hasPermission = true;
          break;
        }
      }
    }

    return hasPermission;
  }

  identity(){
    let identity = this.UserService.getCurrentUser();

    this.currentUser = identity;

      //console.log('user: ', JSON.parse(usuario));
      //this.currentUser = user;
    //console.log(this.currentUser);

  }

}
