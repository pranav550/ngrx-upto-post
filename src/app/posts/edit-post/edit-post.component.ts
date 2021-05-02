import { Subscription } from 'rxjs';
import { getPostsById } from './../state/post.selector';
import { AppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { addPost, updatePost } from '../state/post.action';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {
  postForm:FormGroup
  post:Post
  postSubscription:Subscription
   constructor(
    private route:ActivatedRoute, 
    private store:Store<AppState>) { }
 
 
 
   ngOnInit(): void {
     this.route.paramMap.subscribe((params)=>{
       const id = params.get('id')
      this.postSubscription = this.store.select(getPostsById,{id}).subscribe(res=>{
         this.post =res
         this.createPost()
       })
     })
   
   }

   ngOnDestroy(){
     if(this.postSubscription){
       this.postSubscription.unsubscribe()
     }
   }

   createPost(){
    this.postForm = new FormGroup({
      title: new FormControl(this.post?.title, [Validators.required, Validators.minLength(8)]),
      description: new FormControl(this.post?.description, [Validators.required, Validators.minLength(8)]),
    })
   }
 
   updatePost(){
     if(!this.postForm.valid){
       return
     }
     const post:Post ={
       id:this.post.id,
       title:this.postForm.value.title,
       description:this.postForm.value.description
     }
 
     this.store.dispatch(updatePost({post}))
   }
 
}
