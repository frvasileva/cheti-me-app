import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MessageListComponent } from "./message-list/message-list.component";
import { MessageRoutingModule } from "./message-routing.module";
import { MessagesComponent } from "./messages.component";
import { MessageItemComponent } from "./message-item/message-item.component";

@NgModule({
  declarations: [MessageListComponent, MessagesComponent, MessageItemComponent],
  imports: [CommonModule, RouterModule, MessageRoutingModule],

  exports: []
})
export class MessagesModule {}
