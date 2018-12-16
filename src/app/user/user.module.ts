import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { UserComponent } from "./user.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { UserRoutingModule } from "./user-routing.module";

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    UserComponent
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, UserRoutingModule]
})
export class UserModule {}
