import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Post } from "../interfaces/post";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>();
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    // console.log(form);
    this.submitted.emit(form.value);
    form.reset();
  }
}
