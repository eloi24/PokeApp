import { LoadingController } from '@ionic/angular';
import { UtilsService } from './../../services/utils/utils.service';
import { PokeapiService } from 'src/app/services/pokeapi/pokeapi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public pokemon: any;
  private pokemonId: string="";

  constructor(
    private route: ActivatedRoute,
    private api: PokeapiService,
    public utils: UtilsService,
    private LoadingController: LoadingController,
  ) { }

  async ngOnInit() {
    this.pokemonId = this.route.snapshot.paramMap.get('id')!;
    this.getPokemonInfo();
   
  }
  ionViewDidEnter() {
    
  }

  async getPokemonInfo(){
    const loading = await this.LoadingController.create({
      message: 'Cargando...',
      duration: 3000,
    });

    loading.present();
    this.api.getPokemonDetail(this.pokemonId).subscribe((data)=>{
      this.pokemon=data
      loading.dismiss();
    });

  }

}
