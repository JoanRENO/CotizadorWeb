import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {
  title = 'Cotizador Web';
  unit: boolean | number = false
  steps = ['INTERIOR FLOORS', 'DROP CEILINGS & LIGHTING', 'PAINTING', 'CLOSETS']
  img_src: string = '../assets/img/AA/AREA RESERVE - 3.png'
  paints = [{'group': 'WOOD LOOK', 'opc': 'NERA ROBLE', 'img_src': '../assets/img/colores/nera_roble.png', 'img_render': '../assets/img/AA/AREA RESERVE - 3.png'},
  {'group': 'CEMENT & STONE LOOK', 'opc': 'ELITE PERLA', 'img_src': '../assets/img/colores/elite-perla.png' , 'img_render': '../assets/img/AA/AREA RESERVE - TRESANA POLISHED 2.png'},
  {'group': 'CEMENT & STONE LOOK', 'opc': 'CROMAT PERLA', 'img_src': '../assets/img/colores/cromat_perla.jpg' , 'img_render': '../assets/img/AA/AREA RESERVE - 4.png'},
  {'group': 'MARBLE LOOK', 'opc': 'TRESANA POLISHED', 'img_src': '../assets/img/colores/TRESANA_POLISHED.png', 'img_render': '../assets/img/AA/AREA RESERVE - 24.11.2022.png'}]
  
  groups = ['WOOD LOOK', 'CEMENT & STONE LOOK', 'MARBLE LOOK']
  luces = ['../assets/img/AA/luces1.png', '../assets/img/AA/luces2.png', '../assets/img/AA/luces3.png', '../assets/img/AA/luces0.png']
  optionPaint = ['ALL WHITE', 'WARM WHITE', 'DECORATOR WHITE']
  optionLuces = ['Drop ceiling & LED Lights', 'Soffit with LED lights', 'Ceiling lamp', 'null']
  pinturas = ['../assets/img/AA/AREA RESERVE - ELITE PERLA.png', '../assets/img/AA/AREA RESERVE - NERA ROBLE.png', '../assets/img/AA/AREA RESERVE - TRESANA HONED.png']

  optionsSelected = ['../assets/img/AA/AREA RESERVE - 3.png', '../assets/img/AA/luces1.png', '../assets/img/AA/luces1.png', '../assets/img/AA/luces1.png', '../assets/img/AA/AREA RESERVE - ELITE PERLA.png', '../assets/img/AA/placard1.png']
  pricesSelected = [0,0,0,0,0,0]
  imgsSelected = ['', '', '', '']

  index: number = 0
  optionSeleted: string = "1"

  show1 = 'show'
  show2 = ''
  show3 = ''

  tablePrices: {
    name: string;
    price: number;
  }[] = []
  ambientes: {
    name: string;
    option: string;
  }[] = [{name: 'LIVING AREA', option: 'A'}, {name: 'PRIMARY BEDROOM', option: 'A'}, {name: 'OFFICE/FAMILY ROOM', option: 'A'}]
  ambientes2: {
    name: string;
    option: string;
  }[] = [{name: 'PRIMARY BEDROOM', option: 'A'}, {name: 'BEDROOM #2', option: 'A'}, {name: 'BEDROOM #3', option: 'A'}]
  constructor(private translate: TranslateService) {
    this.setAppLanguage();
  }

  setAppLanguage() {
    this.translate.setDefaultLang('en');
    this.translate.use(this.translate.getBrowserLang()!);
  }

  public cambiarLenguaje(lang: string) {
    this.translate.use(lang);
  }

  selectUnit(unit: number) {
    this.unit = unit
  }

  ngOnInit(): void {
  }

  changeOptionPrev() {
    if (this.index == 0) {
      this.img_src = this.paints[this.paints.length-1].img_render
      this.optionsSelected[0] = this.paints[this.paints.length-1].img_render
      this.imgsSelected[0] = this.paints[this.paints.length-1].opc
      this.index = this.paints.length-1
    } else {
      this.img_src = this.paints[this.index-1].img_render
      this.optionsSelected[0] = this.paints[this.index-1].img_render
      this.imgsSelected[0] = this.paints[this.index-1].opc 
      this.index = this.index-1
    }
    this.pricesSelected[0] = 1111
  }

  changeOptionNext() {
    if (this.paints.length-1 == this.index) {
      this.img_src = this.paints[0].img_render
      this.optionsSelected[0] = this.paints[0].img_render
      this.imgsSelected[0] = this.paints[0].opc
      this.index = 0
    } else {
      this.img_src = this.paints[this.index+1].img_render
      this.optionsSelected[0] = this.paints[this.index+1].img_render
      this.imgsSelected[0] = this.paints[this.index+1].opc
      this.index += 1
    }
    this.pricesSelected[0] = 1111
  }

  selectLighting(opc: number, index: number) {
    if (opc != 4 && opc != 5) {
      this.img_src = this.luces[opc-1]
      this.optionsSelected[index] = this.luces[opc-1]
      this.pricesSelected[index] = 2222
      this.ambientes[index-1].option = this.optionLuces[opc-1]
    } else {
      this.img_src = this.luces[3]
      this.optionsSelected[index] = this.luces[3]
      this.pricesSelected[index] = 0
      this.ambientes[3].option = 'A'
    }
  }

  selectPaint(opc: number) {
    if (opc != 4 && opc != 5) {
      this.img_src = this.pinturas[opc-1]
      this.optionsSelected[4] = this.pinturas[opc-1]
      this.pricesSelected[4] = 500
      this.imgsSelected[2] = this.optionPaint[opc-1]
    } else {
      this.img_src = this.pinturas[3]
      this.optionsSelected[4] = this.pinturas[3]
      this.pricesSelected[4] = 0
      this.imgsSelected[2] = 'A'
    }
  }

  fun() {
    let top = document.getElementById("listOptions")?.scrollTop
    if (top! < 300) {this.img_src = this.optionsSelected[0]} 
    else if (top! >= 300 && top! < 1200) {
      if (this.show1 === "show") {this.img_src = this.optionsSelected[1]}
      if (this.show2 === "show") {this.img_src = this.optionsSelected[2]}
      if (this.show3 === "show") {this.img_src = this.optionsSelected[3]}
    } 
    else if (top! >= 1200 && top! < 2000) {this.img_src = this.optionsSelected[4]} 
    else if(top! >= 2000) {this.img_src = this.optionsSelected[5]}
  }

  collapseFunc(opc: number) {
    //console.log(opc , this.show1, this.show2, this.show3)
    if (this.show1 === "show" && opc == 1) {      
      //console.log('1 true')  
      this.show2 = "show"
      this.show1 = ""
      this.img_src = this.optionsSelected[2]
    } else if (opc == 1) {
      this.show1 = "show"
      this.show2 = ""
      this.show3 = ""
      this.img_src = this.optionsSelected[1]
    }
    if (this.show2 === "show" && opc == 2) {        
      this.show3 = "show"
      this.show2 = ""
      this.img_src = this.optionsSelected[3]
    } else if (opc == 2) {
      this.show2 = "show"
      this.show1 = ""
      this.show3 = ""
      this.img_src = this.optionsSelected[2]
    }
    if (this.show3 === "show" && opc == 3) {        
    } else if (opc == 3) {
      this.show3 = "show"
      this.show1 = ""
      this.show2 = ""
      this.img_src = this.optionsSelected[3]
    }
  }

  LucesFunc() {
    this.show1 = "show"
    this.show2 = ""
    this.show3 = ""
  }

  getTotalPrices() {
    let total = 0
    for (let aux of this.pricesSelected) {
      total += aux
    }
    return total
  }

  getTablePrice() {
    let aux = []
    for (let index of [0,1,2,3,4,5]) {
      if (index == 2 || index == 3) {
        aux[1].price += this.pricesSelected[index]
      } else if (index == 4 || index == 5) {
        aux.push({'name': this.steps[index-2], 'price': this.pricesSelected[index]})
      } else {
        aux.push({'name': this.steps[index], 'price': this.pricesSelected[index]})
      }
      //+
    }
    return aux
  }

}
