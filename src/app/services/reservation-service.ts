import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ReservationService {

    constructor(private http: HttpClient) {

    }


    check(reservationId, datetime: string) {

        //     http://ip:port/resource/1337/available?datetime=2020-03-19T12:00:00

        //     return this.http.get(`localhost:8080/resource/avai`, { params: {
        //         datetime
        //     }})
    }
}