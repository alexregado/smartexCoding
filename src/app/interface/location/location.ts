import { Datasource } from "./datasource";
import { Rank } from "./rank";

export interface Location {
    country_code: string
    housenumber: string
    street: string
    country: string
    datasource: Datasource
    postcode: string
    state: string
    city: string
    district: string
    suburb: string
    county: string
    lon: number
    lat: number
    state_code: string
    distance: number
    result_type: string
    name: string
    formatted: string
    address_line1: string
    address_line2: string
    rank: Rank
    place_id: string
}
