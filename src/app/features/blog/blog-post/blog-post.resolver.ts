import {
  ActivatedRouteSnapshot,
  RedirectCommand,
  ResolveFn,
} from '@angular/router';
import { BlogItem } from '../../../types/blogItem';
import { inject } from '@angular/core';
import { ErrorService } from '../../../services/error.service';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export const blogPostResolver: ResolveFn<
  Promise<BlogItem | null | RedirectCommand>
> = async (route: ActivatedRouteSnapshot) => {
  const id = route.paramMap.get('id');
  const http = inject(HttpClient);
  const errorService = inject(ErrorService);

  try {
    const res: BlogItem = (await lastValueFrom(
      http.get(`/api/entries/${id}`),
    )) as BlogItem;
    res.headerImageUrl = `https://picsum.photos/800/300?random=${Math.random()}`;
    res.authorAvatar = `https://picsum.photos/100?random=${Math.random()}`;
    return res;
  } catch (err) {
    errorService.report('An error occurred while loading the blog post.');
    console.error(err);
    return null;
  }
};
