import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private img_src: string = environment.img_src;

  constructor() { }

  getPokemonImgUrl(url: string):string {
    return this.img_src + this.getId(url) + ".png"
  }

  firstChartToUpperCase(string: string):string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  getId(string: string) :string{
    var urlsplitted = string.split("/");
    return urlsplitted[urlsplitted.length - 2];
  }
}
