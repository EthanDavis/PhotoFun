import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PhotoViewComponent } from "./photo-view.component";

const routes: Routes = [
    { path: "photos", component: PhotoViewComponent}
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class PhotoViewRouting {}
