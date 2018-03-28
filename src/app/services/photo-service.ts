import { Photo } from "../models/photo";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";


@Injectable()
export class PhotoService {

    private http: HttpClient;
    private readonly url: string = "https://jsonplaceholder.typicode.com/photos";

    constructor(http: HttpClient) {
        this.http = http;
    }

    public async getPhotos(): Promise<Photo[]> {
        return this.http.get<Photo[]>(this.url, {}).map((response: Photo[]) => {
            return response;
        }).toPromise();
    }
}
