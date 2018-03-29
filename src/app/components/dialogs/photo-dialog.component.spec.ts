import { PhotoDialogComponent } from "./photo-dialog.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogModule, MatFormFieldModule, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormsModule } from "@angular/forms";

class MockDialogRef {
    close(): void {

    }
}


describe("PhotoViewComponent", () => {
    let fixture: ComponentFixture<PhotoDialogComponent>;
    let component: PhotoDialogComponent;
    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [
                PhotoDialogComponent
            ],
            imports: [
                FormsModule,
                MatFormFieldModule,
                MatDialogModule
            ],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: {} },
                { provide: MatDialogRef, useClass: MockDialogRef }
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(PhotoDialogComponent);
        component = fixture.componentInstance;
    });

    it("should call getCommentFromStorage on init", () => {
        const getFromStorageSpy: jasmine.Spy = spyOn(PhotoDialogComponent.prototype, "getCommentFromSessionStorage");

        component.ngOnInit();

        expect(getFromStorageSpy).toHaveBeenCalled();
    });

    it("should store comments in session storage", () => {
        const setInStorageSpy: jasmine.Spy = spyOn(component.sessionStorage, "setItem");
        component.comment = "test";
        component.photoData = {
            id: 1,
        };

        component.storeCommentInSessionStorage();

        expect(setInStorageSpy).toHaveBeenCalledWith(component.photoData.id, component.comment);
    });

    it("should get comments from session storage", () => {
        const getFromStorageSpy: jasmine.Spy = spyOn(component.sessionStorage, "getItem").and.returnValue("test");
        component.comment = "test";
        component.photoData = {
            id: 1,
        };

        const comment: string = component.getCommentFromSessionStorage();

        expect(getFromStorageSpy).toHaveBeenCalledWith(component.photoData.id);
        expect(comment).toBe("test");
    });

    it("should return '' from session storage if null is returned", () => {
        const getFromStorageSpy: jasmine.Spy = spyOn(component.sessionStorage, "getItem").and.returnValue(null);
        component.comment = "test";
        component.photoData = {
            id: 1,
        };

        const comment: string | null = component.getCommentFromSessionStorage();

        expect(getFromStorageSpy).toHaveBeenCalledWith(component.photoData.id);
        expect(comment).toBe("");
    });

    it("should call storeInSessionStorage and close", () => {
        const setInStorageSpy: jasmine.Spy = spyOn(PhotoDialogComponent.prototype, "storeCommentInSessionStorage");
        const closeSpy: jasmine.Spy = spyOn(PhotoDialogComponent.prototype, "close");

        component.saveAndClose();

        expect(setInStorageSpy).toHaveBeenCalled();
        expect(closeSpy).toHaveBeenCalled();
    });

    it("should call dialog close", () => {
        const dialogCloseSpy: jasmine.Spy = spyOn(MockDialogRef.prototype, "close");

        component.close();

        expect(dialogCloseSpy).toHaveBeenCalled();
    });
});
