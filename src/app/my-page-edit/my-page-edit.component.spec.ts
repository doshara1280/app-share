import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPageEditComponent } from './my-page-edit.component';

describe('MyPageEditComponent', () => {
  let component: MyPageEditComponent;
  let fixture: ComponentFixture<MyPageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPageEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
