import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Photo } from "../../models/photo";


@Component({
    templateUrl: "./photo-dialog.component.html"
})
export class PhotoDialogComponent implements OnInit {

    dialog: MatDialogRef<PhotoDialogComponent>;
    photoData: any;
    comment: string;
    sessionStorage: Storage = window.sessionStorage;

    constructor(dialog: MatDialogRef<PhotoDialogComponent>, @Inject(MAT_DIALOG_DATA) data: Photo) {
        this.dialog = dialog;
        this.photoData = data;
    }

    ngOnInit(): void {
        this.comment = this.getCommentFromSessionStorage();
    }

    close(): void {
        this.dialog.close();
    }

    storeCommentInSessionStorage(): void {
        this.sessionStorage.setItem(this.photoData.id, this.comment);
    }

    getCommentFromSessionStorage(): string {
        const comment: string = this.sessionStorage.getItem(this.photoData.id);
        return (comment !== null) ? comment : "";
    }

    saveAndClose(): void {
        this.storeCommentInSessionStorage();
        this.close();
    }
}
