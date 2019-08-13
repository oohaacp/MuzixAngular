import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TrackComponent } from './track/track.component';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayListComponent, PlayListCommentDialogue } from './play-list/play-list.component';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    TrackComponent,
    HomeComponent,
    PlayListComponent,
    PlayListCommentDialogue,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule
  ],
  entryComponents:[PlayListComponent,PlayListCommentDialogue],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
