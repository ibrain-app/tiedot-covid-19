import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Covid19ApiService {
  API_URI = 'https://covid-api.mmediagroup.fr/v1';

  constructor(private http: HttpClient) {}

  getCases() {
    return this.http.get(this.API_URI + '/cases');
  }

  getCountryCases(country: string) {
    return this.http.get(this.API_URI + '/cases?country=' + country);
  }

  getContinentCases(continent: string) {
    return this.http.get(this.API_URI + '/cases?continent=' + continent);
  }

  getConfirmedHistory() {
    return this.http.get(this.API_URI + '/history?status=confirmed');
  }

  getDeathsHistory() {
    return this.http.get(this.API_URI + '/history?status=deaths');
  }

  getCountryConfirmedHistory(country: string) {
    return this.http.get(
      this.API_URI + '/history?status=confirmed&country=' + country
    );
  }

  getCountryDeathsHistory(country: string) {
    return this.http.get(
      this.API_URI + '/history?status=deaths&country=' + country
    );
  }

  getContinentConfirmedHistory(continent: string) {
    return this.http.get(
      this.API_URI + '/history?status=confirmed&continent=' + continent
    );
  }

  getContinentDeathsHistory(continent: string) {
    return this.http.get(
      this.API_URI + '/history?status=deaths&continent=' + continent
    );
  }

  getVaccines() {
    return this.http.get(this.API_URI + '/vaccines');
  }

  getCountryVaccines(country: string) {
    return this.http.get(this.API_URI + '/vaccines?country=' + country);
  }

  getContinentVaccines(continent: string) {
    return this.http.get(this.API_URI + '/vaccines?continent=' + continent);
  }
}
