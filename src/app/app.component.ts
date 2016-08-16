import { Component } from '@angular/core';
import { WikipediaSearchService } from './wikipedia-search.service';

//application wide shared Rx operators
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  items:Array<string>;
  constructor(private service:WikipediaSearchService) {}

  search(term: string) {
    this.service.search(term)
                .subscribe(results => this.items = results);
  }
}
