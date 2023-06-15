import { StoreService } from 'src/store/store.service';
import { IPpost } from './post.interface';

export class PostService {
  constructor(private readonly storeServices: StoreService) {}
  createPost(post: IPpost): IPpost {
    return post;
  }
}
