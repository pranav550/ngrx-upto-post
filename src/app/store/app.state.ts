import { counterReducer } from '../counter/state/counter.reducer';
import { postReducer } from '../posts/state/post.reducer';
import { PostsState } from '../posts/state/post.state';
import { counterState } from './../counter/state/counter.state';
export interface AppState {
    counter:counterState,
    posts:PostsState
}

export const appReducer = {
    counter:counterReducer,
    posts:postReducer
}