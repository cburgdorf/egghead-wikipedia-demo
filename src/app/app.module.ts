import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { JsonpModule } from '@angular/http';
import { WikipediaSearchService } from './wikipedia-search.service';

@NgModule({
    providers: [WikipediaSearchService],
    declarations: [AppComponent],
    imports:      [BrowserModule, JsonpModule],
    bootstrap:    [AppComponent],
})
export class AppModule {}