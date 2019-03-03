import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProductsComponent } from './containers/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule,
    //RouterModule.forRoot(ROUTES),
    //StoreModule.forRoot({}, { metaReducers }),
    //EffectsModule.forRoot([]),
    //environment.development ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
