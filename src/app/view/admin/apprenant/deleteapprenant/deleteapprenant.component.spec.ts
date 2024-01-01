import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteapprenantComponent } from './deleteapprenant.component';

describe('DeleteapprenantComponent', () => {
  let component: DeleteapprenantComponent;
  let fixture: ComponentFixture<DeleteapprenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteapprenantComponent]
    });
    fixture = TestBed.createComponent(DeleteapprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
