import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostThoughtComponent } from './post-thought.component';

describe('PostThoughtComponent', () => {
  let component: PostThoughtComponent;
  let fixture: ComponentFixture<PostThoughtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostThoughtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
