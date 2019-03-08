import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglePlaceSearchComponent } from './google-place-search.component';

describe('GooglePlaceSearchComponent', () => {
  let component: GooglePlaceSearchComponent;
  let fixture: ComponentFixture<GooglePlaceSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglePlaceSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglePlaceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
