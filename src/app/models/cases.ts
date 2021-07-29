export class Cases {
  confirmed: number;
  recovered: number;
  deaths: number;
  country: string;
  population: number;
  sq_km_area: number;
  life_expectancy: string;
  elevation_in_meters: number;
  continent: string;
  abbreviation: string;
  location: string;
  iso: number;
  capital_city: string;
  lat: string;
  long: string;
  updated: Date;

  constructor(
    confirmed: number,
    recovered: number,
    deaths: number,
    country: string,
    population: number,
    sq_km_area: number,
    life_expectancy: string,
    elevation_in_meters: number,
    continent: string,
    abbreviation: string,
    location: string,
    iso: number,
    capital_city: string,
    lat: string,
    long: string,
    updated: Date
  ) {
    this.confirmed = confirmed;
    this.recovered = recovered;
    this.deaths = deaths;
    this.country = country;
    this.population = population;
    this.sq_km_area = sq_km_area;
    this.life_expectancy = life_expectancy;
    this.elevation_in_meters = elevation_in_meters;
    this.continent = continent;
    this.abbreviation = abbreviation;
    this.location = location;
    this.iso = iso;
    this.capital_city = capital_city;
    this.lat = lat;
    this.long = long;
    this.updated = updated;
  }
}
