import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({

    imports: [
        RouterModule.forRoot([
            {
                path: "",
                redirectTo: "/photos",
                pathMatch: "full"
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting { }
