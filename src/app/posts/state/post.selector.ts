import { PostsState } from './post.state';
import { createFeatureSelector, createSelector, props } from '@ngrx/store';

const getPostState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostState, (state)=>{
   console.log(state)
   return state.posts
})

export const getPostsById = createSelector(getPostState, (state, props)=>{
   return state.posts.find(post=>post.id===props.id)
})

