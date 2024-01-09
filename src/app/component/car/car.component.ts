import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  buttonText = '+';

  collapseButtonText = '+';
  button = 'Araç Marka';
  isCollapsed = false;
  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCars();
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }
  toggleButton() {
    if (this.buttonText === '+') {
      this.buttonText = '-';
    } else {
      this.buttonText = '+';
    }
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;

    if (this.isCollapsed) {
      this.collapseButtonText = '-';
    } else {
      this.collapseButtonText = '+';
    }
  }
}
