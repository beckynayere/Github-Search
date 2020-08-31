import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitUsersComponent } from './git-users.component';

describe('GitUsersComponent', () => {
  let component: GitUsersComponent;
  let fixture: ComponentFixture<GitUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
