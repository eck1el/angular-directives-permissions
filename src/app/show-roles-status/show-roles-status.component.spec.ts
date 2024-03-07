import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRolesStatusComponent } from './show-roles-status.component';

describe('ShowRolesStatusComponent', () => {
  let component: ShowRolesStatusComponent;
  let fixture: ComponentFixture<ShowRolesStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowRolesStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowRolesStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
