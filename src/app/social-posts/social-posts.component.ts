import { Component, OnInit } from "@angular/core";
import { Post } from "../interfaces/post";

@Component({
  selector: "app-social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: "Angular",
      thought: "Super cool"
    },
    {
      title: "This lab",
      thought: "challenging but we getting it"
    },
    {
      title: "Grand Circus",
      thought: "Ballin'"
    }
  ];
  constructor() {}

  ngOnInit(): void {}

  onSubmit(post: Post) {
    this.posts.push(post);
  }

  onDelete(index) {
    this.posts.splice(index, 1);
  }
}
