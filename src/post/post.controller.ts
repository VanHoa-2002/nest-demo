import { Body, Controller, Inject, Post, forwardRef } from '@nestjs/common';
import { IPpost } from './post.interface';
import { PostService } from './post.service';
import { StoreService } from 'src/store/store.service';

@Controller('post')
export class PostController {
  constructor(
    private postService: PostService,
    @Inject('STORE_SERVICEpost.json')
    private storeService: StoreService,
  ) {}
  @Post()
  createPost(@Body() post): IPpost {
    this.storeService.getUser(post);
    return this.postService.createPost(post);
  }
}
