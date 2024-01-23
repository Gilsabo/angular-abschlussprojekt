import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from '../../Blogs';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.css',
})
export class BlogItemComponent implements OnInit {
  blogs: Blog[] = [];

  @Input() blog!: Blog;

  @Output() onDeleteBlog: EventEmitter<Blog> = new EventEmitter<Blog>();

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((blogs: Blog[]) => {
      this.blogs = blogs;
    });
  }
  onDelete(blog: Blog) {
    this.onDeleteBlog.emit(blog);
  }
}
