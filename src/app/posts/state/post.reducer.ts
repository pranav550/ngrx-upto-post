import { on } from '@ngrx/store';
import { createReducer } from '@ngrx/store';
import { addPost, updatePost, loadPost, deletePost } from './post.action';
import { postInitialState } from './post.state';

const _postReducer = createReducer(postInitialState,
    on(addPost, (state, action) => {
        console.log(action)
        let post = {...action.post}
        post.id = (state.posts.length + 1).toString()
        return {
            ...state,
            posts: [...state.posts,post]
        }
    }),
    on(updatePost, (state, action) => {
        console.log(action)
        const updatePost = state.posts.map(post=>{
           return action.post.id===post.id?action.post:post
        })
        return {
            ...state,
            posts: updatePost
        }
    }),
    on(deletePost, (state, action) => {
        const deletePost = state.posts.filter(post=>{
           return post.id!==action.id
        })
        return {
            ...state,
            posts: deletePost
        }
    }),
    on(loadPost, (state, action) => {
        console.log(action)
        return {
            ...state,
            posts: []
        }
    }),
)
export function postReducer(state, action) {
    return _postReducer(state, action)
}