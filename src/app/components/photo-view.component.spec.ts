import { TestBed, ComponentFixture } from "@angular/core/testing";
import { PhotoViewComponent } from "./photo-view.component";
import { Photo } from "../models/photo";
import { PhotoService } from "../services/photo-service";
import { MatGridListModule, MatDialogModule } from "@angular/material";

class MockPhotoService {
    async getPhotos(): Promise<Photo[]> {
        const photoArray: Photo[] = [];
        return Promise.resolve(photoArray);
    }
}

describe("PhotoViewComponent", () => {
    let fixture: ComponentFixture<PhotoViewComponent>;
    let component: PhotoViewComponent;
    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [
                PhotoViewComponent
            ],
            imports: [
                MatGridListModule,
                MatDialogModule
            ],
            providers: [
                { provide: PhotoService, useClass: MockPhotoService }
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(PhotoViewComponent);
        component = fixture.componentInstance;
    });

    it("should call getPhotos on init and set photo array to first 25 elements", async () => {
        const photosToReturn: Photo[] = [];
        const expectedLength: number = 25;
        for (let i = 0; i < 30; i++) {
            photosToReturn[i] = new Photo();
        }
        const photoSpy: jasmine.Spy = spyOn(MockPhotoService.prototype, "getPhotos").and.returnValues(photosToReturn);
        await component.ngOnInit();

        expect(component.photos.length).toBe(expectedLength);
        expect(photoSpy).toHaveBeenCalled();
    });

    it("should call open dialog", () => {
        const testPhoto: Photo = {
            id: 1,
            albumId: 1,
            thumbnailUrl: "testThumbnail",
            url: "testUrl",
            title: "testing"
        };

        const dialogSpy: jasmine.Spy = spyOn(component.dialog, "open");

        component.openPhoto(testPhoto);

        expect(dialogSpy).toHaveBeenCalled();

    });

});
