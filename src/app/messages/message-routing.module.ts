import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MessagesComponent } from "./messages.component";
import { MessageListComponent } from "./message-list/message-list.component";
import { ConversationComponent } from "./conversation/conversation.component";



const authorsRoutes: Routes = [
  {
    path: "", component: MessagesComponent,
    children: [
      { path: "", component: MessageListComponent },
      { path: "details/:id", component: ConversationComponent },
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
