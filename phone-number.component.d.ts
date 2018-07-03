import { ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, Validator, ValidationErrors } from '@angular/forms';
import { Country } from './country.model';
import { CountryService } from './country.service';
export declare class PhoneNumberComponent implements OnInit, ControlValueAccessor, Validator {
    private countryService;
    placeholder: string;
    maxlength: number;
    defaultCountry: string;
    required: boolean;
    allowDropdown: boolean;
    phoneComponent: ElementRef;
    onTouch: Function;
    onModelChange: Function;
    countries: Country[];
    selectedCountry: Country;
    countryFilter: string;
    showDropdown: boolean;
    phoneNumber: string;
    value: string;
    constructor(countryService: CountryService, phoneComponent: ElementRef);
    ngOnInit(): void;
    /**
     * Opens the country selection dropdown
     */
    displayDropDown(): void;
    /**
     * Hides the country selection dropdown
     * @param event
     */
    hideDropdown(event: Event): void;
    /**
     * Sets the selected country code to given country
     * @param event
     * @param countryCode
     */
    updateSelectedCountry(event: Event, countryCode: string): void;
    /**
     * Updates the phone number
     * @param event
     */
    updatePhoneNumber(event: Event): void;
    /**
     * shows the dropdown with keyboard event
     * @param event
     */
    handleKeyboardEvent(event: KeyboardEvent): void;
    /**
     *
     * @param prefix
     */
    private findPrefix(prefix);
    /**
     * Sort countries by name
     */
    private orderCountriesByName();
    /**
     *
     * @param fn
     */
    registerOnTouched(fn: Function): void;
    /**
     *
     * @param fn
     */
    registerOnChange(fn: Function): void;
    /**
     *
     * @param value
     */
    writeValue(value: string): void;
    /**
     * Validation
     * @param c
     */
    validate(c: FormControl): ValidationErrors | null;
    /**
     * Updates the value and trigger changes
     */
    private updateValue();
    /**
     * Updates the input
     * @param countryCode
     */
    private updatePhoneInput(countryCode);
    /**
     * Util function to check if given text starts with plus sign
     * @param text
     */
    private static startsWithPlus(text);
    /**
     * Returns the selected country's dialcode
     */
    private getSelectedCountryDialCode();
    /**
     * Reduced the prefixes
     * @param foundPrefixes
     */
    private static reducePrefixes(foundPrefixes);
}
