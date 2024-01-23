// blog.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../../Blogs';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  @Input() blogs: Blog[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((blogs) => (this.blogs = blogs));
  }

  deleteBlog(blog: Blog) {
    this.blogService

      .deleteBlog(blog)

      .subscribe(
        () => (this.blogs = this.blogs.filter((item) => item.id !== blog.id))
      );
  }
  addBlog(blog: Blog) {
    this.blogService
      .createBlogService(blog)
      .subscribe((blog) => this.blogs.push(blog));
  }
}
