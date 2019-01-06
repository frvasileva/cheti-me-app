import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-send-message",
  templateUrl: "./send-message.component.html",
  styleUrls: ["./send-message.component.scss"]
})
export class SendMessageComponent implements OnInit {
  sendMessageForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.sendMessageForm = new FormGroup({
      messageData: new FormGroup({
        subject: new FormControl(null, Validators.required),
        body: new FormControl(null, [Validators.required])
      })
    });
  }

  onSubmit() {
    console.log(this.sendMessageForm.value);
  }
}
