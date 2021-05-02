import { decrement, increment, reset, customInput, channelName } from './counter.action';
import { counterInitialState } from './counter.state';
import { createReducer, on } from "@ngrx/store"

const _counterReducer = createReducer(counterInitialState, 
    on(increment,(state)=>{
       return {
           ...state,
           counter:state.counter+1
       }
    }),
    on(decrement,(state)=>{
       return {
           ...state,
           counter:state.counter-1
       }
    }),
    on(reset,(state)=>{
       return {
           ...state,
           counter:0
       }
    }),
    on(customInput,(state, action)=>{
        console.log(action)
        return {
            ...state,
            counter:action.count+state.counter
        }
     }),

     on(channelName,(state)=>{
        return {
            ...state,
            channelName:"Change Name"
        }
     }),
    )

export function counterReducer(state, action){
  return _counterReducer(state, action)
}