interface ICountry {
  country_id: string
  probability: number
}

export interface ICountryData {
  count: number
  name: string
  country: ICountry[]
}
