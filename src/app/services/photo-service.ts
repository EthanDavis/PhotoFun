import { Photo } from "../models/photo";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";


@Injectable()
export class PhotoService {

    http: HttpClient;
    readonly url: string = "https://jsonplaceholder.typicode.com/photos";

    constructor(http: HttpClient) {
        this.http = http;
    }

    async getPhotos(): Promise<Photo[]> {
        return this.http.get<Photo[]>(this.url, {}).map((response: Photo[]) => {
            return response;
        }).toPromise();
    }
}
