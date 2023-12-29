import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditapprenantComponent } from './editapprenant.component';

describe('EditapprenantComponent', () => {
  let component: EditapprenantComponent;
  let fixture: ComponentFixture<EditapprenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditapprenantComponent]
    });
    fixture = TestBed.createComponent(EditapprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
