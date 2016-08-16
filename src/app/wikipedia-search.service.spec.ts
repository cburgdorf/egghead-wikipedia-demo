/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { WikipediaSearchService } from './wikipedia-search.service';

describe('Service: WikipediaSearch', () => {
  beforeEach(() => {
    addProviders([WikipediaSearchService]);
  });

  it('should ...',
    inject([WikipediaSearchService],
      (service: WikipediaSearchService) => {
        expect(service).toBeTruthy();
      }));
});
