import { Component } from '@angular/core';

//material
import { MatCardModule } from '@angular/material/card';

import { BlogItem } from './types/blogItem';
import { BlogItemComponent } from './components/blogItem/blogItem.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatCardModule, BlogItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  URL = '/api/entries';
  queryResult = [];
  blogItems: BlogItem[] = [];

  constructor() {
    fetch(this.URL)
      .then((res) =>
        res.json().then((res) => {
          console.log(res);
          this.queryResult = res;
          this.blogItems = res.data as BlogItem[];
          console.log(this.blogItems);
        }),
      )
      .catch((err) => console.error(err));
  }
}
