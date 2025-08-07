import { ResolveFn, ActivatedRouteSnapshot } from '@angular/router';
import { BlogItem } from '../../../types/blogItem';
import { inject } from '@angular/core';
import { ErrorService } from '../../../services/error.service';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

export const blogOverviewResolver: ResolveFn<Promise<BlogItem[]>> = async (
  route: ActivatedRouteSnapshot,
) => {
  console.log(route.paramMap.get('id'));
  const http = inject(HttpClient);
  const errorService = inject(ErrorService);

  try {
    const res: { data: BlogItem[] } = (await lastValueFrom(
      http.get('/api/entries'),
    )) as { data: BlogItem[] };

    res.data.forEach((item: BlogItem) => {
      item.headerImageUrl = `https://picsum.photos/200/100?random=${Math.random()}`;
      item.authorAvatar = `https://picsum.photos/200?random=${Math.random()}`;
    });

    return res.data;
  } catch (err) {
    errorService.report('An error occurred while loading the blog overveiw.');
    console.error(err);
    return [];
  }
};
