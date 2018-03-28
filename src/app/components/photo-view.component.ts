import { Component, OnInit } from "@angular/core";
import { PhotoService } from "../services/photo-service";
import { Photo } from "../models/photo";
import { MatDialogRef, MatDialog, MatDialogConfig } from "@angular/material";
import { PhotoDialogComponent } from "./dialogs/photo-dialog.component";

@Component({
    templateUrl: "./photo-view.component.html"
})
export class PhotoViewComponent implements OnInit {

    photoService: PhotoService;
    photos: Photo[];
    dialog: MatDialog;


    constructor(photoService: PhotoService, dialogRef: MatDialog) {
        this.photoService = photoService;
        this.dialog = dialogRef;
    }

    async ngOnInit(): Promise<void> {
        const allPhotos: Photo[] = await this.photoService.getPhotos();
        this.photos = allPhotos.splice(0, 25);
    }

    openPhoto(photo: Photo): void {
        const dialogConfig: MatDialogConfig = {
            height: "90%", width: "90%", maxWidth: "90%",
            data: photo
        };
        this.dialog.open(PhotoDialogComponent, dialogConfig);
    }
}
