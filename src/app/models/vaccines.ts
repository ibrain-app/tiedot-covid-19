export class Vaccines {
  administered: number;
  people_vaccinated: number;
  people_partially_vaccinated: number;
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
    administered: number,
    people_vaccinated: number,
    people_partially_vaccinated: number,
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
    this.administered = administered;
    this.people_vaccinated = people_vaccinated;
    this.people_partially_vaccinated = people_partially_vaccinated;
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
