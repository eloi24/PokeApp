import { UtilsService } from './../../services/utils/utils.service';
import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { PokeapiService } from 'src/app/services/pokeapi/pokeapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public pokemons: Array<any> = [];
  public next: string = "";
  public prev: string = "";
  public isModalOpen = false;
  private img_src = environment.img_src;

  constructor(
    private api: PokeapiService,
    private router: Router,
    public utils: UtilsService
  ) { }


  ngOnInit() {
    this.getData();
  }


  openModal(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  getData() {
    this.api.getPokemons().subscribe((data) => {
      this.next = data.next;
      this.prev = data.previous;
      this.pokemons = data.results
    })
  }

  loadMoreData(ev: any) {
    setTimeout(() => {
      this.api.getPokemons(this.next).subscribe((data) => {
        this.next = data.next;
        this.prev = data.previous;
        this.pokemons = this.pokemons.concat(data.results)
        ev.target.complete();

      })
    })


  }

  

  goDetail(url: string) {
    this.router.navigate(['detail', { id: this.utils.getId(url) }])
  }

  onImgError(id: string){
    document.getElementById(id)?.setAttribute("src","assets/pokeball.png");

  }



}