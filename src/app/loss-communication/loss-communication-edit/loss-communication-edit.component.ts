import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loss-communication-edit',
  templateUrl: './loss-communication-edit.component.html',
  styleUrls: ['./loss-communication-edit.component.css'],
})
export class LossCommunicationEditComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly location: Location
  ) {}

  ngOnInit(): void {}

  goBack() {
    this.location.back();
  }
}
