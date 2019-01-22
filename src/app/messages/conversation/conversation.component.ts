import { Component, OnInit } from "@angular/core";
import { Message } from "../model/message.model";
import { MessageService } from "../message.service";

@Component({
  selector: "app-conversation",
  templateUrl: "./conversation.component.html",
  styleUrls: ["./conversation.component.scss"]
})
export class ConversationComponent implements OnInit {
  constructor(private messageService: MessageService) {}
  postDataArr: Message[] = [];

  onAddPost(postData) {
    this.postDataArr.push(postData);
  }

  ngOnInit() {
    this.postDataArr.push(this.messageService.getMessagesById("1"));
  }
}
