import { AppState } from './../../store/app.state';
import { getChannelName } from './../state/counter.selector';
import { counterState } from './../state/counter.state';
import { customInput, channelName } from './../state/counter.action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  count:number;
  channelName: string;
  channelName$:Observable<string>
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  //   this.store.select(getChannelName).subscribe(res=>{
  //     console.log("channel called")
  //    this.channelName=res
  //  })
  this.channelName$ = this.store.select(getChannelName)
  }

  addCounter(value){
    this.store.dispatch(customInput({count:+this.count}))
  }

  changeName(){
    this.store.dispatch(channelName())
  }

}
