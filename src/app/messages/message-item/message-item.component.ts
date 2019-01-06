import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Message } from "../model/message.model";

@Component({
  selector: "app-message-item",
  templateUrl: "./message-item.component.html",
  styleUrls: ["./message-item.component.scss"]
})
export class MessageItemComponent implements OnInit {
  message: Message;
  messageId: string;

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.messageId = params["id"];
      this.message = this.messageService.getMessagesById(this.messageId);

      console.log(this.message);
    });
  }
}
