import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MessagesComponent } from "./messages.component";
import { MessageListComponent } from "./message-list/message-list.component";
import { MessageItemComponent } from "./message-item/message-item.component";



const authorsRoutes: Routes = [
  {
    path: "", component: MessagesComponent,
    children: [
      { path: "", component: MessageListComponent },
      { path: "details/:id", component: MessageItemComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authorsRoutes)
  ],
  exports: [RouterModule]
})
export class MessageRoutingModule {

}
