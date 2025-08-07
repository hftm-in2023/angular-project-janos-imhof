import { BlogComment } from './blogComment';

export interface BlogItem {
  id: number;
  title: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  author: string;
  authorAvatar: string;
  comments: number | BlogComment[];
  contentPreview?: string | null | undefined;
  content?: string | undefined;
  headerImageUrl: string;
  likedByMe: boolean;
  likes: number;
}
