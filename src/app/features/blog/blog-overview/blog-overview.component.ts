import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogItemComponent } from '../../../components/blogItem/blogItem.component';
import { BlogItem } from '../../../types/blogItem';
import { blogItemArraySchema } from '../../../schemas/blogItemSchema';

@Component({
  standalone: true,
  selector: 'app-blog-overview',
  imports: [CommonModule, BlogItemComponent, RouterLink],
  templateUrl: './blog-overview.component.html',
})
export class BlogOverviewComponent implements OnInit {
  private route = inject(ActivatedRoute);
  blogItems: BlogItem[] = [];

  ngOnInit() {
    this.blogItems = blogItemArraySchema.parse(
      this.route.snapshot.data['overviewData'],
    );
  }
}
