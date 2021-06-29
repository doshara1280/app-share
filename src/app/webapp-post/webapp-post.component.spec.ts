import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebappPostComponent } from './webapp-post.component';

describe('WebappPostComponent', () => {
  let component: WebappPostComponent;
  let fixture: ComponentFixture<WebappPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebappPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebappPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
