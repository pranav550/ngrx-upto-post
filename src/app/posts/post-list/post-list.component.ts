import { Observable } from 'rxjs';
import { getPosts } from './../state/post.selector';
import { AppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { deletePost } from '../state/post.action';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts:Observable<Post[]>
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
   this.posts = this.store.select(getPosts)

}

onDeletePost(id:string){
    this.store.dispatch(deletePost({id}))
}

}
