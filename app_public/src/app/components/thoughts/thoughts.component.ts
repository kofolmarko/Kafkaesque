import { Component, OnInit } from '@angular/core';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { ThoughtService } from '../../services/thought.service';
import { Thought } from '../../Thought';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.css']
})
export class ThoughtsComponent implements OnInit {
  thoughts: Thought[] = [];

  constructor(private thoughtService: ThoughtService) { }

  ngOnInit(): void {
    this.thoughtService.getThoughts().subscribe((thoughts) => {
      this.thoughts = thoughts.reverse();
    });
  }

  postThought(thought: Thought) {
    this.thoughtService
      .postThought(thought)
      .subscribe((thought) => {
        this.thoughts.unshift(thought);
      });
  }

  deleteThought(thought: Thought) {
    this.thoughtService
      .deleteThought(thought)
      .subscribe((_id: number) => {
        this.thoughts.forEach((thought, index) => {
          if (thought._id == _id) {
            this.thoughts.splice(index, 1);
          }
        })
      });
  }

}
