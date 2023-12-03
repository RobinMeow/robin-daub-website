import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantedPosterComponent } from './wanted-poster.component';

describe('WantedPosterComponent', () => {
  let component: WantedPosterComponent;
  let fixture: ComponentFixture<WantedPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WantedPosterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WantedPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
