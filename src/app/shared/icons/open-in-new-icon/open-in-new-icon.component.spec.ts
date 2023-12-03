import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenInNewIconComponent } from './open-in-new-icon.component';

describe('OpenInNewIconComponent', () => {
  let component: OpenInNewIconComponent;
  let fixture: ComponentFixture<OpenInNewIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenInNewIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpenInNewIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
