import { Component, Input } from '@angular/core';

//material
import { MatCardModule } from '@angular/material/card';
import { BlogItem } from '../../types/blogItem';
import { MatButton } from '@angular/material/button';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-blog-item',
  standalone: true,
  imports: [MatCardModule, MatButton],
  templateUrl: './blogItem.component.html',
  styleUrls: ['./blogItem.component.scss'],
})
export class BlogItemComponent {
  @Input() blogItem!: BlogItem;
  protected readonly formatDate = formatDate;
}
