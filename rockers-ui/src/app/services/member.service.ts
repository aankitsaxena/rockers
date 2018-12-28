import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http:HttpClient) { }

  getMembers() {
    return this.http.get('/server/api/v1/member');
  }

  getBike(id: number) {
    return this.http.get('/server/api/v1/member/' + id);
  }

  addMember(member) {
    let body = JSON.stringify(member);
    return this.http.post('/server/api/v1/member', body, httpOptions);
  }
}
