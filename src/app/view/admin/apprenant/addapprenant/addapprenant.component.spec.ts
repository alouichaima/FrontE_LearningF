import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddapprenantComponent } from './addapprenant.component';

describe('AddapprenantComponent', () => {
  let component: AddapprenantComponent;
  let fixture: ComponentFixture<AddapprenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddapprenantComponent]
    });
    fixture = TestBed.createComponent(AddapprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
