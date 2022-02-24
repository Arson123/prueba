import { Component, OnInit } from '@angular/core';
import { DigimonesServices } from '../../services/digimones.service';

@Component({
  selector: 'app-digimones',
  templateUrl: './digimones.component.html',
  styleUrls: ['./digimones.component.scss']
})
export class DigimonesComponent implements OnInit {

  digimones: any;
  value: string | undefined;

  constructor(public digimon: DigimonesServices) {}

  ngOnInit() {
    this.digimon.getDigimones().subscribe(
      (response) => {
        this.digimones = response;
      },
      (e) => {
        console.log(e);
      }
    );
  }

  updateList(event: Event){
    const element = event.target as HTMLInputElement;
    this.digimon.postDigimonesForLevel(element.value).subscribe(
      (response) => {
        this.digimones = response;
      },
      (e) => {
        console.log(e);
      }
    );
  }

}
