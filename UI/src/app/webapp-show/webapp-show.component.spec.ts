import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebappShowComponent } from './webapp-show.component';

describe('WebappShowComponent', () => {
  let component: WebappShowComponent;
  let fixture: ComponentFixture<WebappShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebappShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebappShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
