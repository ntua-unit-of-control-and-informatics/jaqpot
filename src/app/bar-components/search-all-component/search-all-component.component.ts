import { Component, OnInit } from '@angular/core';
import { SearchApiService } from '../../jaqpot-client/api/search.service';
import { Router } from '@angular/router';
import { SearchSession } from '../../jaqpot-client/model/searchSession';

@Component({
  selector: 'app-search-all-component',
  templateUrl: './search-all-component.component.html',
  styleUrls: ['./search-all-component.component.css']
})
export class SearchAllComponentComponent implements OnInit {


  searchTerm:string;

  constructor(
    private router:Router,
    private searchApi:SearchApiService
  ) { }

  ngOnInit() {
  }

  search($event){
    this.searchApi.startSearch(this.searchTerm).subscribe(resp =>{
      let seacrhSession = resp.seacrhSession;
      this.router.navigate(['/search'],  { queryParams: { q: this.searchTerm, s:seacrhSession  } });
      this.searchTerm = ''
    })

    
  }

}
