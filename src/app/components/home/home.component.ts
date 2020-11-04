import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReservationService } from 'src/app/services/reservation-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form: FormGroup;

  constructor(private service: ReservationService) {
    this.form = new FormGroup({
      date: new FormControl('', [Validators.required]),
      time: new FormControl('', Validators.required)
    })
  }
  ngOnInit(): void {
  }

  check(value) {

  }

}
