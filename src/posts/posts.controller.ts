import { Controller, Get, Query } from '@nestjs/common';
import { Post } from './post.entity.js';
import { PostsService } from './posts.service.js';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findByTitle(@Query('title') title?: string): Promise<Post[]> {
    return this.postsService.findByTitle(title);
  }
}