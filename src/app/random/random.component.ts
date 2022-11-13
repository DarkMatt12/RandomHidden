import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
  lista1:any[] = [
    {
      Nombre: "Gatos",
      Cantidad: 1,
    },{
      Nombre: "Perros",
      Cantidad: 1,
    },
  ];

  lista2:any[] = []
  turno:number = 0;
  MOSTRARRESULTADO = false;

  name:string = "";

  CrearElemento(){
    this.lista1.push({"Nombre":this.name, Cantidad: 1});
    console.log(this.lista1);
    this.name = "";
  }

  restapipi(index:any){
    console.log(index);
    this.lista1[index].Cantidad--;
    if (this.lista1[index].Cantidad < 1){
      this.lista1[index].Cantidad = 1;
    }
  }

  sumapipi(index:any){
    this.lista1[index].Cantidad++;
    if (this.lista1[index].Cantidad > 99){
      this.lista1[index].Cantidad = 99;
    }
  }
  eliminarpipi(index:any){
    this.lista1.splice(index, 1);
  }




  mezclar(){
    this.MOSTRARRESULTADO = true;
    this.lista2 = [];
    for(const coso of this.lista1){
      for(let index = 0; index < coso.Cantidad; index++){
        this.lista2.push(coso.Nombre);
      }
    this.lista2 = this.shuffle(this.lista2);

    }
    console.log(this.lista2);


  }
  shuffle(array:any) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
  Siguiente(){
    this.turno++;
    if (this.turno == this.lista2.length){
      this.MOSTRARRESULTADO = false;
      this.turno = 0;

    }console.log(this.lista2.length);
    console.log(this.turno);
  }
/*
  mezclar(){
    this.globallista1 = [];

    for(const coso of this.lista1){
      for(let index = 0; index < coso.Cantidad; index++){
        this.globallista1.push(coso.Nombre);
      }
    }
    this.globallista1 = this.shuffleArray(this.lista1);
    this.siguientecoso();
    console.log(this.shuffleArray);
  }

  siguientecoso(){
    this.mostrarcontador++;

  }*/
/*
  shuffleArray(array:string[]){
    for(let i = array.length - 1; i > 9; i--){
      const j = Math.floor(Math.random()* (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;


  }*/












  constructor() { }

  ngOnInit(): void {
  }

}
