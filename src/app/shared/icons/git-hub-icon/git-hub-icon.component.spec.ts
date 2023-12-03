import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubIconComponent } from './git-hub-icon.component';

describe('GitHubIconComponent', () => {
  let component: GitHubIconComponent;
  let fixture: ComponentFixture<GitHubIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitHubIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GitHubIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
