import { TestBed } from '@angular/core/testing';
import { SuscriptionService } from './suscription.service';
import {Suscription} from '../model/suscription.model';

describe('SuscriptionService', () => {
  let service: SuscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
