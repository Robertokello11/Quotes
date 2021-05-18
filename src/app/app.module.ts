import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { DatePipePipe } from './date-pipe.pipe';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QuotesComponent } from './quotes/quotes.component';
import { HighlightQuoteDirective } from './highlight-quote.directive';
// import { HighlightQouteDirective } from './highlight-qoute.directive';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailsComponent,
    DatePipePipe,
    QuotesFormComponent,
    HighlightQuoteDirective,
    HighlightQuoteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
