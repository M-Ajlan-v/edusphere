import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNoticesComponent } from './parent-notices.component';

describe('ParentNoticesComponent', () => {
  let component: ParentNoticesComponent;
  let fixture: ComponentFixture<ParentNoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentNoticesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
