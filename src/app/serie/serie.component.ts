import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  temporadas: number = 0;
  promedio: number = 0;


  constructor(private serieService: SerieService) { }
  series: Array<Serie> = [];

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
    this.getPromedioTemporadas();
  }

  // Aqui va el calculo de los promedios

  getPromedioTemporadas(){
    this.serieService.getSeries().subscribe(series=>{
      series.forEach(serie => this.temporadas+=serie.seasons);
      this.promedio=this.temporadas/series.length;
    });
    console.log(`Average ${this.promedio} , Seaosn ${this.temporadas}`)

  }


  ngOnInit() {
    this.getSeries();
  }

}
