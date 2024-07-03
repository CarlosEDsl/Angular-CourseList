import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDialongComponent } from './error-dialong.component';

describe('ErrorDialongComponent', () => {
  let component: ErrorDialongComponent;
  let fixture: ComponentFixture<ErrorDialongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorDialongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorDialongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
