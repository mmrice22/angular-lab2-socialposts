import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Post } from "../interfaces/post";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Input() postRef: Post;
  @Output() deleted = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  deletePost() {
    this.deleted.emit();
  }
}
