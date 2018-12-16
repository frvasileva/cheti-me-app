import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.scss"]
})
export class AddBookComponent implements OnInit {
  addBookForm: FormGroup;
  bookTypes = ["paper", "ebook"];
  constructor() {}

  ngOnInit() {
    this.addBookForm = new FormGroup({
      "bookData": new FormGroup({
        "title": new FormControl(null, Validators.required),
        "description": new FormControl(null, [Validators.required]),
        "bookType": new FormControl("ebook", Validators.required)
      }),
      "author": new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.addBookForm.value);
  }
}
