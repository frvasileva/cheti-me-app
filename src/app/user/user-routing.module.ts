import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ProfileComponent } from "./profile/profile.component";
import { UserComponent } from "./user.component";


const userRoutes: Routes = [
  {
    path: "",
    component: UserComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "sign-up", component: SignupComponent },
      { path: "profile", component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
