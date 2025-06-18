import { Component, Input } from '@angular/core';

//material
import { MatCardModule } from '@angular/material/card';
import { BlogItem } from '../../types/blogItem';

@Component({
  selector: 'app-blog-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './blogItem.component.html',
  styleUrls: ['./blogItem.component.scss'],
})
export class BlogItemComponent {
  @Input() blogItem!: BlogItem;
}
