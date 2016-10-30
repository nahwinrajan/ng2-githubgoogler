// for dependencies and dependencies injections;
// as we need to inject this service to any component needed
import {Injectable} from '@angular/core';
// because we need to make http request (specifically get for this)
import {Http, Headers} from '@angular/http';
// observable, this is react extension; return response with observable and subscribe
// to that observable component and display information
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username:string;
  private client_id = '7bfff7c9634783b93bf3';
  private client_secret = '6b1bcbd4b7fd6128585921b38c47122c6a9525c4';

  constructor(private _http:Http){
    console.log('Github Service ready!!');
    this.username = 'nahwinrajan';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username +
      '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }
  getRepos() {
    return this._http.get('http://api.github.com/users/' + this.username +
      '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
      .map(res => res.json());
  }
}
