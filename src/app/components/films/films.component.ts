import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  public films!: any[];

  constructor() { 

    setTimeout(() => {

      axios.get("https://ghibliapi.herokuapp.com/films/").then((res) => this.films =
       res.data

    );

    }, 3000);

  }

  // funcion que vamos a crear que ocurrira cuando el hijo mande un mensaje

  public recogerId = (idPelicula: string) => {

   console.log(idPelicula);

  }

  ngOnInit(): void {

  }

}
