import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';
import 'rxjs/add/operator/delay';

@Injectable()
export class WikipediaSearchService {

  constructor(private jsonp: Jsonp) { }

  search (term: string) {
    let search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');

    let obs = this.jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search})
               .map(response => response.json()[1]);

    if (term.length === 2) {
      obs = obs.delay(1000);
    }

    return obs;
  }

}
