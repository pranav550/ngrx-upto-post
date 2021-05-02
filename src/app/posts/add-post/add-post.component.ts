import { AppState } from './../../store/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { addPost } from '../state/post.action';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm:FormGroup
 // post:Post
  constructor(private store:Store<AppState>) { }



  ngOnInit(): void {
 
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    })
  }

  addPost(){
    if(!this.postForm.valid){
      return
    }
    const post:Post ={
      title:this.postForm.value.title,
      description:this.postForm.value.description
    }

    this.store.dispatch(addPost({post}))
  }

}
