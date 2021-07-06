import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Thought } from 'src/app/Thought';

@Component({
  selector: 'app-post-thought',
  templateUrl: './post-thought.component.html',
  styleUrls: ['./post-thought.component.css']
})
export class PostThoughtComponent implements OnInit {
  @Output() onPostThought: EventEmitter<Thought> = new EventEmitter
  text: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text) {
      alert('sorry, cannot post an empty mind');
      return;
    }

    const newThought = {
      text: this.text
    }

    this.onPostThought.emit(newThought);

    this.text = '';
  }

}
