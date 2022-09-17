import { TestBed, inject } from '@angular/core/testing';

import { GetRestaurantsService } from './get-restaurants.service';

describe('GetRestaurantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetRestaurantsService]
    });
  });

  it('should ...', inject([GetRestaurantsService], (service: GetRestaurantsService) => {
    expect(service).toBeTruthy();
  }));
});
