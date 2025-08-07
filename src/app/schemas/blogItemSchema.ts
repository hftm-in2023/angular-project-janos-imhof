import * as z from 'zod';

export const blogItemSchema = z.object({
  id: z.number(),
  title: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  author: z.string(),
  authorAvatar: z.string(),
  content: z.string(),
  headerImageUrl: z.string(),
  likedByMe: z.boolean(),
  likes: z.number(),
  comments: z.any(),
});

export const blogItemOverviewSchema = z.object({
  id: z.number(),
  title: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  author: z.string(),
  authorAvatar: z.string(),
  contentPreview: z.string(),
  headerImageUrl: z.string(),
  comments: z.number(),
  likedByMe: z.boolean(),
  likes: z.number(),
});

export const blogItemArraySchema = z.array(blogItemOverviewSchema);
