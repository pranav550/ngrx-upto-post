import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/post';
export const ADD_POST_ACTION = "add post";
export const UPDATE_POST_ACTION = "update post";
export const DELETE_POST_ACTION = "delete post";
export const LOAD_POSTS = "load post";

export const addPost = createAction(ADD_POST_ACTION, props<{post:Post}>())
export const updatePost = createAction(UPDATE_POST_ACTION, props<{post:Post}>())
export const deletePost = createAction(DELETE_POST_ACTION, props<{id:string}>())
export const loadPost = createAction(LOAD_POSTS, props<{post:Post}>())