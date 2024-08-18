import { TestBed } from '@angular/core/testing';

import { TblUserService } from './tbl-user.service';

describe('TblUserService', () => {
  let service: TblUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TblUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
