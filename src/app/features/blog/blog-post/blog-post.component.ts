import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BlogItem } from '../../../types/blogItem';
import { MatIcon } from '@angular/material/icon';
import { blogItemSchema } from '../../../schemas/blogItemSchema';

@Component({
  standalone: true,
  selector: 'app-blog-post',
  imports: [CommonModule, RouterLink, MatIcon, NgOptimizedImage],
  templateUrl: './blog-post.component.html',
})
export class BlogPostComponent implements OnInit {
  private route = inject(ActivatedRoute);
  blogPost: BlogItem | undefined;

  ngOnInit() {
    this.blogPost = blogItemSchema.parse(this.route.snapshot.data['blogData']);
  }
}
