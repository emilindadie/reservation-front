import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReservationService } from 'src/app/services/reservation-service';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IApiResponse } from 'src/app/models/api-response.model.i';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form: FormGroup;

  constructor(private service: ReservationService, private _snackBar: MatSnackBar) {
    this.form = new FormGroup({
      date: new FormControl('', [Validators.required]),
      time: new FormControl('', Validators.required)
    })
  }
  ngOnInit(): void {
  }

  check(value: { date: string, time: string }) {
    const formatDatetime = moment(value.date).add({ hours: Number(value.time.split(':')[0]), minutes: Number(value.time.split(':')[1]) }).format('YYYY-MM-DDTHH:mm:ss');
    this.service.check(formatDatetime).subscribe((res: IApiResponse) => {
      const message = res.available ? `this ressource is available on ${moment(value.date).format('YYYY-MM-DD')} at ${value.time}` : `this ressource is unavailable on ${moment(value.date).format('YYYY-MM-DD')} at ${value.time}`;
      this._snackBar.open(message, null,
        {
          duration: 2000,
          panelClass: ['blue-snackbar']
        }
      );
    });
  }

}
