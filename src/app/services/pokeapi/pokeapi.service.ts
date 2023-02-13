import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private api_url = environment.api_url;

  constructor(
    private http: HttpClient,
  ) { }

  getPokemons(pagination_url?: string){
    if(!pagination_url){
      let params = new HttpParams()
      .set('limit', 20)
      return this.http.get<any>(this.api_url+'pokemon',{params});
    }else{
      return this.http.get<any>(pagination_url);
    }
  }

  getPokemonDetail(id:string){
    return this.http.get<any>(this.api_url+'pokemon/'+id);
  }

  getTypes(){
    return this.http.get<any>(this.api_url+'type')
  }

  getFilteredTypes(id: string){
    return this.http.get<any>(this.api_url+'type/'+id)
  }
}
