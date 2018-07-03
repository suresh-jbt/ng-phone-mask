import { Country } from "./country.model";
export declare class CountryService {
    private countries;
    constructor();
    /**
     * Returns the countries
     */
    getCountries(): Country[];
    /**
     * Load and returns the countries
     */
    private loadCountries(locale?);
}
