export interface BlogItem {
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  author: string;
  comments: number;
  contentPreview: string;
  headerImageUrl: string;
  likedByMe: boolean;
  likes: number;
}
