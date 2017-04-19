import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleLanguageComponent } from './toggle-language.component';

describe('ToggleLanguageComponent', () => {
  let component: ToggleLanguageComponent;
  let fixture: ComponentFixture<ToggleLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
