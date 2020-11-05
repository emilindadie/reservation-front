import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IApiResponse } from '../models/api-response.model.i';

@Injectable()
export class ReservationService {

    constructor(private http: HttpClient) { }

    check(datetime: string): Observable<IApiResponse> {
        return this.http.get<IApiResponse>('http://localhost:8080/resource/1337/available', {
            params: {
                datetime
            }
        });
    }
}

