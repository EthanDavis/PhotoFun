import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController, TestRequest } from "@angular/common/http/testing";
import { PhotoService } from "./photo-service";
import { Photo } from "../models/photo";

describe("Photo Service", () => {
    let service: PhotoService;
    let httpMock: HttpTestingController;
    const testPhotoArray: Photo[] = [];
    const url: string = "https://jsonplaceholder.typicode.com/photos";
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                PhotoService
            ]
        });

        const photo1: Photo = {
            albumId: 1,
            id: 1,
            title: "testTitle1",
            url: "testUrl",
            thumbnailUrl: "testThumbnailUrl"
        };
        const photo2: Photo = {
            albumId: 2,
            id: 2,
            title: "testTitle2",
            url: "testUrl",
            thumbnailUrl: "testThumbnailUrl"
        };
        testPhotoArray.push(photo1);
        testPhotoArray.push(photo2);

        service = TestBed.get(PhotoService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it("should return an array of photos", async () => {
        const httpSpy: jasmine.Spy = spyOn(service.http, "get").and.callThrough();
        service.getPhotos().then((returnedPhotos: Photo[]) => {
            httpMock.verify();
            expect(returnedPhotos.length).toBe(2);
        });
        const getPhotoRequest: TestRequest = httpMock.expectOne(url);
        getPhotoRequest.flush(testPhotoArray);
    });
});
