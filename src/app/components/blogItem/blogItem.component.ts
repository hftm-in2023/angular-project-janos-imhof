import { Component, Input } from '@angular/core';

//material
import { MatCardModule } from '@angular/material/card';
import { BlogItem } from '../../types/blogItem';
import { NgOptimizedImage } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-blog-item',
  standalone: true,
  imports: [MatCardModule, NgOptimizedImage, MatButton],
  templateUrl: './blogItem.component.html',
  styleUrls: ['./blogItem.component.scss'],
})
export class BlogItemComponent {
  @Input() blogItem!: BlogItem;
}
