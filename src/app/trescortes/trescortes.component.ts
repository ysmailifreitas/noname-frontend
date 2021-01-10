import { TrescortesService } from './trescortes.service';
import { TresCortes } from './trescortes.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-trescortes',
  templateUrl: './trescortes.component.html',
  styleUrls: ['./trescortes.component.css']
})
export class TrescortesComponent implements OnInit {

  constructor(private http: HttpClient, private tservice: TrescortesService) { }

  ngOnInit() {
    this.genTable()
  }

  rows = []

  header = ["Colocação", "Jogador", "Pontuação", "Finais", "Partidas", "Primeiro", "Queimadas"]
  header2 = ["Colocacao", "Jogador", "Pontuacao", "finais", "partidas", "primeiro", "queimadas"]

  genTable() {
    this.tservice.getData().subscribe((data: TresCortes[]) => {
      for (let i in data) {
        this.rows[i] = data[i]
      }
      console.log(this.rows);
    })
  }

}
