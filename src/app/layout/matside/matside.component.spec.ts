import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatsideComponent } from './matside.component';

describe('MatsideComponent', () => {
  let component: MatsideComponent;
  let fixture: ComponentFixture<MatsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
