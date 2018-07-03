import { PipeTransform } from '@angular/core';
import { Country } from "./country.model";
export declare class CountryPipe implements PipeTransform {
    transform(value: Country[], args?: string): any;
}
