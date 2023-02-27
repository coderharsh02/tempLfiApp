import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Donation } from '../_models/donation';

@Injectable({
  providedIn: 'root'
})
export class DonationsService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDonations() {
    return this.http.get<Donation[]>(this.baseUrl + 'donations');
  }

  donateNow(donation: Donation) {
    return this.http.post<any>(this.baseUrl + 'donations', donation);
  }

  addCollector(donation: any) {
    return this.http.put<any>(this.baseUrl + 'donations/addCollector', donation);
  }
}
