import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../Blogs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = 'http://localhost:5000/blogs';

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUrl);
  }

  deleteBlog(blog: Blog): Observable<Blog> {
    const url = `${this.apiUrl}/${blog.id}`;
    return this.http.delete<Blog>(url);
  }

  createBlogService(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.apiUrl, blog, httpOptions);
  }
}
