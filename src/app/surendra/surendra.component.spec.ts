import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurendraComponent } from './surendra.component';

describe('SurendraComponent', () => {
  let component: SurendraComponent;
  let fixture: ComponentFixture<SurendraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurendraComponent]
    });
    fixture = TestBed.createComponent(SurendraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
