import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  // Sintaxis de cuando queremos recivir "prop" del componnet padre
  @Input() public pelicula!: any;

  @Output() public peliculaId = new EventEmitter<string>();

// crear una funcion que se llame al hacer click en la carta y que va a emitir un id al componente padre

public emitirId = (): void =>{
  this.peliculaId.emit(this.pelicula.id)
}
  constructor() {


   }

  ngOnInit(): void {
    
    
  }

}
