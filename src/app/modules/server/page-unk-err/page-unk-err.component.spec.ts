import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUnkErrComponent } from './page-unk-err.component';

describe('PageUnkErrComponent', () => {
  let component: PageUnkErrComponent;
  let fixture: ComponentFixture<PageUnkErrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUnkErrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUnkErrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
