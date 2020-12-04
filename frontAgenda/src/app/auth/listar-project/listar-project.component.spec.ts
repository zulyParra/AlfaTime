import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProjectComponent } from './listar-project.component';

describe('ListarProjectComponent', () => {
  let component: ListarProjectComponent;
  let fixture: ComponentFixture<ListarProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
