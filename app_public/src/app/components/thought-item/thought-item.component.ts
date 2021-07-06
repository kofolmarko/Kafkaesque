import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Thought } from '../../Thought';
import { faBook, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-thought-item',
  templateUrl: './thought-item.component.html',
  styleUrls: ['./thought-item.component.css']
})
export class ThoughtItemComponent implements OnInit {
  @Input() thought: Thought;
  @Output() onDeleteThought: EventEmitter<Thought> = new EventEmitter();
  
  faBook = faBook;
  faCross = faTrash;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(thought: Thought) {
    this.onDeleteThought.emit(thought);
  }

}
