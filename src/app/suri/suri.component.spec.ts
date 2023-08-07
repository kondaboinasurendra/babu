import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuriComponent } from './suri.component';

describe('SuriComponent', () => {
  let component: SuriComponent;
  let fixture: ComponentFixture<SuriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuriComponent]
    });
    fixture = TestBed.createComponent(SuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
