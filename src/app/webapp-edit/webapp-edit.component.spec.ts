import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebappEditComponent } from './webapp-edit.component';

describe('WebappEditComponent', () => {
  let component: WebappEditComponent;
  let fixture: ComponentFixture<WebappEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebappEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebappEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
