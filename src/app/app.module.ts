import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowRolesStatusComponent } from './show-roles-status/show-roles-status.component';
import { RoleDirective } from './role.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShowRolesStatusComponent,
    RoleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
