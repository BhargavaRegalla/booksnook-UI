import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbestComponent } from './topbest.component';

describe('TopbestComponent', () => {
  let component: TopbestComponent;
  let fixture: ComponentFixture<TopbestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
