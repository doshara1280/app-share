import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebappListComponent } from './webapp-list.component';

describe('WebappListComponent', () => {
  let component: WebappListComponent;
  let fixture: ComponentFixture<WebappListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebappListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebappListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
