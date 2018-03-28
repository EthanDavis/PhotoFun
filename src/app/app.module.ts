import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { PhotoService } from "./services/photo-service";
import { AppRouting } from "./app.routing";
import { PhotoViewModule } from "./components/photo-view.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PhotoViewModule,
    AppRouting
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
