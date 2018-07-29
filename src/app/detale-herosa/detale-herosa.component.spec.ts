import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaleHerosaComponent } from './detale-herosa.component';

describe('DetaleHerosaComponent', () => {
  let component: DetaleHerosaComponent;
  let fixture: ComponentFixture<DetaleHerosaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaleHerosaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaleHerosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
