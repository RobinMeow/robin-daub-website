import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareBiographyComponent } from './software-biography.component';

describe('SoftwareBiographyComponent', () => {
  let component: SoftwareBiographyComponent;
  let fixture: ComponentFixture<SoftwareBiographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareBiographyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwareBiographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
