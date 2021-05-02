import { AppState } from './../../store/app.state';
import { getCounter } from './../state/counter.selector';
import { counterState } from './../state/counter.state';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy {
 counter:number;
 counter$:Observable<number>
 counterSubscription:Subscription;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  // this.counterSubscription = this.store.select(getCounter).subscribe(res=>{
  //   console.log("counter called")
  //     this.counter=res
  //   })
   this.counter$ = this.store.select(getCounter)
  }

  ngOnDestroy(){
    // if(this.counterSubscription){
    //   this.counterSubscription.unsubscribe()
    // }
  }

}
