import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotfoungComponent } from './pagenotfoung.component';

describe('PagenotfoungComponent', () => {
  let component: PagenotfoungComponent;
  let fixture: ComponentFixture<PagenotfoungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenotfoungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotfoungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
