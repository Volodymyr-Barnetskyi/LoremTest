import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatIconModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaintestComponent } from './maintest/maintest.component';
import { RatingComponent } from './rating/rating.component';
import { MatButtonModule } from '@angular/material/button';
import { StartComponent } from './start/start.component';
import { TestComponent } from './test/test.component';
@NgModule({
  declarations: [
    AppComponent,
    MaintestComponent,
    MaintestComponent,
    RatingComponent,
    StartComponent,
    TestComponent
  ],
    imports: [
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatCardModule,
    RouterModule.forRoot([
      { path: '', component: MaintestComponent, pathMatch: 'full' },
      { path: 'rating', component: RatingComponent },
      { path: 'maintest', component: MaintestComponent },
      { path: 'start', component: StartComponent },
      { path: 'test', component: TestComponent }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
