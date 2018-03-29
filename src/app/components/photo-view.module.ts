import { NgModule } from "@angular/core";
import { PhotoViewComponent } from "./photo-view.component";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { PhotoViewRouting } from "./photo-view.routing";
import { MatGridListModule } from "@angular/material/grid-list";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { PhotoDialogComponent } from "./dialogs/photo-dialog.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { PhotoService } from "../services/photo-service";

@NgModule({
    declarations: [
        PhotoViewComponent,
        PhotoDialogComponent
    ],
    entryComponents: [
        PhotoDialogComponent
    ],
    providers: [
        PhotoService
    ],
    imports: [
        CommonModule,
        PhotoViewRouting,
        MatGridListModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        FlexLayoutModule
    ]
})
export class PhotoViewModule { }
