import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Blog } from '../../Blogs';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.css',
})
export class AddBlogComponent implements OnInit {
  ngOnInit(): void {}

  text!: string;

  content!: string;

  @Output() onAddBlog: EventEmitter<Blog> = new EventEmitter<Blog>();

  onSubmit() {
    if (!this.text) {
      alert('Please add a blog');

      return;
    }

    const newDate = new Date();
    const newBlog: Blog = {
      title: this.text,

      content: this.content,

      created_at: newDate.toString(),
    };

    this.onAddBlog.emit(newBlog);
  }
}
