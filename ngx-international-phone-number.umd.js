(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('google-libphonenumber')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/forms', 'google-libphonenumber'], factory) :
	(factory((global['ngx-international-phone-number'] = {}),global.core,global.common,global.forms,global.glibphone));
}(this, (function (exports,core,common,forms,glibphone) { 'use strict';

var CountryService = (function () {
    function CountryService() {
    }
    /**
     * Returns the countries
     * @return {?}
     */
    CountryService.prototype.getCountries = function () {
        if (!this.countries || this.countries.length == 0)
            this.countries = this.loadCountries();
        return this.countries;
    };
    /**
     * Load and returns the countries
     * @param {?=} locale
     * @return {?}
     */
    CountryService.prototype.loadCountries = function (locale) {
        if (locale === void 0) { locale = 'en'; }
        var /** @type {?} */ countries = [
            {
                name: '',
                dialCode: '994',
                countryCode: 'az'
            },
            {
                name: '',
                dialCode: '1242',
                countryCode: 'bs'
            },
            {
                name: '',
                dialCode: '973',
                countryCode: 'bh'
            },
            {
                name: '',
                dialCode: '880',
                countryCode: 'bd'
            },
            {
                name: '',
                dialCode: '1246',
                countryCode: 'bb'
            },
            {
                name: '',
                dialCode: '375',
                countryCode: 'by'
            },
            {
                name: '',
                dialCode: '32',
                countryCode: 'be'
            },
            {
                name: '',
                dialCode: '501',
                countryCode: 'bz'
            },
            {
                name: '',
                dialCode: '229',
                countryCode: 'bj'
            },
            {
                name: '',
                dialCode: '1441',
                countryCode: 'bm'
            },
            {
                name: '',
                dialCode: '975',
                countryCode: 'bt'
            },
            {
                name: '',
                dialCode: '591',
                countryCode: 'bo'
            },
            {
                name: '',
                dialCode: '387',
                countryCode: 'ba'
            },
            {
                name: '',
                dialCode: '267',
                countryCode: 'bw'
            },
            {
                name: '',
                dialCode: '55',
                countryCode: 'br'
            },
            {
                name: '',
                dialCode: '246',
                countryCode: 'io'
            },
            {
                name: '',
                dialCode: '1284',
                countryCode: 'vg'
            },
            {
                name: '',
                dialCode: '673',
                countryCode: 'bn'
            },
            {
                name: '',
                dialCode: '359',
                countryCode: 'bg'
            },
            {
                name: '',
                dialCode: '226',
                countryCode: 'bf'
            },
            {
                name: '',
                dialCode: '257',
                countryCode: 'bi'
            },
            {
                name: '',
                dialCode: '855',
                countryCode: 'kh'
            },
            {
                name: '',
                dialCode: '237',
                countryCode: 'cm'
            },
            {
                name: '',
                dialCode: '1',
                countryCode: 'ca'
            },
            {
                name: '',
                dialCode: '238',
                countryCode: 'cv'
            },
            {
                name: '',
                dialCode: '599',
                countryCode: 'bq'
            },
            {
                name: '',
                dialCode: '1345',
                countryCode: 'ky'
            },
            {
                name: '',
                dialCode: '236',
                countryCode: 'cf'
            },
            {
                name: '',
                dialCode: '235',
                countryCode: 'td'
            },
            {
                name: '',
                dialCode: '56',
                countryCode: 'cl'
            },
            {
                name: '',
                dialCode: '86',
                countryCode: 'cn'
            },
            {
                name: '',
                dialCode: '61',
                countryCode: 'cx'
            },
            {
                name: '',
                dialCode: '57',
                countryCode: 'co'
            },
            {
                name: '',
                dialCode: '269',
                countryCode: 'km'
            },
            {
                name: '',
                dialCode: '243',
                countryCode: 'cd'
            },
            {
                name: '',
                dialCode: '242',
                countryCode: 'cg'
            },
            {
                name: '',
                dialCode: '682',
                countryCode: 'ck'
            },
            {
                name: '',
                dialCode: '506',
                countryCode: 'cr'
            },
            {
                name: '',
                dialCode: '225',
                countryCode: 'ci'
            },
            {
                name: '',
                dialCode: '385',
                countryCode: 'hr'
            },
            {
                name: '',
                dialCode: '53',
                countryCode: 'cu'
            },
            {
                name: '',
                dialCode: '599',
                countryCode: 'cw'
            },
            {
                name: '',
                dialCode: '357',
                countryCode: 'cy'
            },
            {
                name: '',
                dialCode: '420',
                countryCode: 'cz'
            },
            {
                name: '',
                dialCode: '45',
                countryCode: 'dk'
            },
            {
                name: '',
                dialCode: '253',
                countryCode: 'dj'
            },
            {
                name: '',
                dialCode: '1767',
                countryCode: 'dm'
            },
            {
                name: '',
                dialCode: '1',
                countryCode: 'do'
            },
            {
                name: '',
                dialCode: '593',
                countryCode: 'ec'
            },
            {
                name: '',
                dialCode: '20',
                countryCode: 'eg'
            },
            {
                name: '',
                dialCode: '503',
                countryCode: 'sv'
            },
            {
                name: '',
                dialCode: '240',
                countryCode: 'gq'
            },
            {
                name: '',
                dialCode: '291',
                countryCode: 'er'
            },
            {
                name: '',
                dialCode: '372',
                countryCode: 'ee'
            },
            {
                name: '',
                dialCode: '251',
                countryCode: 'et'
            },
            {
                name: '',
                dialCode: '500',
                countryCode: 'fk'
            },
            {
                name: '',
                dialCode: '298',
                countryCode: 'fo'
            },
            {
                name: '',
                dialCode: '679',
                countryCode: 'fj'
            },
            {
                name: '',
                dialCode: '358',
                countryCode: 'fi'
            },
            {
                name: '',
                dialCode: '33',
                countryCode: 'fr'
            },
            {
                name: '',
                dialCode: '594',
                countryCode: 'gf'
            },
            {
                name: '',
                dialCode: '689',
                countryCode: 'pf'
            },
            {
                name: '',
                dialCode: '241',
                countryCode: 'ga'
            },
            {
                name: '',
                dialCode: '220',
                countryCode: 'gm'
            },
            {
                name: '',
                dialCode: '995',
                countryCode: 'ge'
            },
            {
                name: '',
                dialCode: '49',
                countryCode: 'de'
            },
            {
                name: '',
                dialCode: '233',
                countryCode: 'gh'
            },
            {
                name: '',
                dialCode: '350',
                countryCode: 'gi'
            },
            {
                name: '',
                dialCode: '30',
                countryCode: 'gr'
            },
            {
                name: '',
                dialCode: '299',
                countryCode: 'gl'
            },
            {
                name: '',
                dialCode: '1473',
                countryCode: 'gd'
            },
            {
                name: '',
                dialCode: '590',
                countryCode: 'gp'
            },
            {
                name: '',
                dialCode: '1671',
                countryCode: 'gu'
            },
            {
                name: '',
                dialCode: '502',
                countryCode: 'gt'
            },
            {
                name: '',
                dialCode: '44',
                countryCode: 'gg'
            },
            {
                name: '',
                dialCode: '224',
                countryCode: 'gn'
            },
            {
                name: '',
                dialCode: '245',
                countryCode: 'gw'
            },
            {
                name: '',
                dialCode: '592',
                countryCode: 'gy'
            },
            {
                name: '',
                dialCode: '509',
                countryCode: 'ht'
            },
            {
                name: '',
                dialCode: '504',
                countryCode: 'hn'
            },
            {
                name: '',
                dialCode: '852',
                countryCode: 'hk'
            },
            {
                name: '',
                dialCode: '36',
                countryCode: 'hu'
            },
            {
                name: '',
                dialCode: '354',
                countryCode: 'is'
            },
            {
                name: '',
                dialCode: '91',
                countryCode: 'in'
            },
            {
                name: '',
                dialCode: '62',
                countryCode: 'id'
            },
            {
                name: '',
                dialCode: '98',
                countryCode: 'ir'
            },
            {
                name: '',
                dialCode: '964',
                countryCode: 'iq'
            },
            {
                name: '',
                dialCode: '353',
                countryCode: 'ie'
            },
            {
                name: '',
                dialCode: '44',
                countryCode: 'im'
            },
            {
                name: '',
                dialCode: '972',
                countryCode: 'il'
            },
            {
                name: '',
                dialCode: '39',
                countryCode: 'it'
            },
            {
                name: '',
                dialCode: '1876',
                countryCode: 'jm'
            },
            {
                name: '',
                dialCode: '81',
                countryCode: 'jp'
            },
            {
                name: '',
                dialCode: '44',
                countryCode: 'je'
            },
            {
                name: '',
                dialCode: '962',
                countryCode: 'jo'
            },
            {
                name: '',
                dialCode: '7',
                countryCode: 'kz'
            },
            {
                name: '',
                dialCode: '254',
                countryCode: 'ke'
            },
            {
                name: '',
                dialCode: '686',
                countryCode: 'ki'
            },
            {
                name: '',
                dialCode: '383',
                countryCode: 'xk'
            },
            {
                name: '',
                dialCode: '965',
                countryCode: 'kw'
            },
            {
                name: '',
                dialCode: '996',
                countryCode: 'kg'
            },
            {
                name: '',
                dialCode: '856',
                countryCode: 'la'
            },
            {
                name: '',
                dialCode: '371',
                countryCode: 'lv'
            },
            {
                name: '',
                dialCode: '961',
                countryCode: 'lb'
            },
            {
                name: '',
                dialCode: '266',
                countryCode: 'ls'
            },
            {
                name: '',
                dialCode: '231',
                countryCode: 'lr'
            },
            {
                name: '',
                dialCode: '218',
                countryCode: 'ly'
            },
            {
                name: '',
                dialCode: '423',
                countryCode: 'li'
            },
            {
                name: '',
                dialCode: '370',
                countryCode: 'lt'
            },
            {
                name: '',
                dialCode: '352',
                countryCode: 'lu'
            },
            {
                name: '',
                dialCode: '853',
                countryCode: 'mo'
            },
            {
                name: '',
                dialCode: '389',
                countryCode: 'mk'
            },
            {
                name: '',
                dialCode: '261',
                countryCode: 'mg'
            },
            {
                name: '',
                dialCode: '265',
                countryCode: 'mw'
            },
            {
                name: '',
                dialCode: '60',
                countryCode: 'my'
            },
            {
                name: '',
                dialCode: '960',
                countryCode: 'mv'
            },
            {
                name: '',
                dialCode: '223',
                countryCode: 'ml'
            },
            {
                name: '',
                dialCode: '356',
                countryCode: 'mt'
            },
            {
                name: '',
                dialCode: '692',
                countryCode: 'mh'
            },
            {
                name: '',
                dialCode: '596',
                countryCode: 'mq'
            },
            {
                name: '',
                dialCode: '222',
                countryCode: 'mr'
            },
            {
                name: '',
                dialCode: '230',
                countryCode: 'mu'
            },
            {
                name: '',
                dialCode: '262',
                countryCode: 'yt'
            },
            {
                name: '',
                dialCode: '52',
                countryCode: 'mx'
            },
            {
                name: '',
                dialCode: '691',
                countryCode: 'fm'
            },
            {
                name: '',
                dialCode: '373',
                countryCode: 'md'
            },
            {
                name: '',
                dialCode: '377',
                countryCode: 'mc'
            },
            {
                name: '',
                dialCode: '976',
                countryCode: 'mn'
            },
            {
                name: '',
                dialCode: '382',
                countryCode: 'me'
            },
            {
                name: '',
                dialCode: '1664',
                countryCode: 'ms'
            },
            {
                name: '',
                dialCode: '212',
                countryCode: 'ma'
            },
            {
                name: '',
                dialCode: '258',
                countryCode: 'mz'
            },
            {
                name: '',
                dialCode: '95',
                countryCode: 'mm'
            },
            {
                name: '',
                dialCode: '264',
                countryCode: 'na'
            },
            {
                name: '',
                dialCode: '674',
                countryCode: 'nr'
            },
            {
                name: '',
                dialCode: '977',
                countryCode: 'np'
            },
            {
                name: '',
                dialCode: '31',
                countryCode: 'nl'
            },
            {
                name: '',
                dialCode: '687',
                countryCode: 'nc'
            },
            {
                name: '',
                dialCode: '64',
                countryCode: 'nz'
            },
            {
                name: '',
                dialCode: '505',
                countryCode: 'ni'
            },
            {
                name: '',
                dialCode: '227',
                countryCode: 'ne'
            },
            {
                name: '',
                dialCode: '234',
                countryCode: 'ng'
            },
            {
                name: '',
                dialCode: '683',
                countryCode: 'nu'
            },
            {
                name: '',
                dialCode: '672',
                countryCode: 'nf'
            },
            {
                name: '',
                dialCode: '850',
                countryCode: 'kp'
            },
            {
                name: '',
                dialCode: '1670',
                countryCode: 'mp'
            },
            {
                name: '',
                dialCode: '47',
                countryCode: 'no'
            },
            {
                name: '',
                dialCode: '968',
                countryCode: 'om'
            },
            {
                name: '',
                dialCode: '92',
                countryCode: 'pk'
            },
            {
                name: '',
                dialCode: '680',
                countryCode: 'pw'
            },
            {
                name: '',
                dialCode: '970',
                countryCode: 'ps'
            },
            {
                name: '',
                dialCode: '507',
                countryCode: 'pa'
            },
            {
                name: '',
                dialCode: '675',
                countryCode: 'pg'
            },
            {
                name: '',
                dialCode: '595',
                countryCode: 'py'
            },
            {
                name: '',
                dialCode: '51',
                countryCode: 'pe'
            },
            {
                name: '',
                dialCode: '63',
                countryCode: 'ph'
            },
            {
                name: '',
                dialCode: '48',
                countryCode: 'pl'
            },
            {
                name: '',
                dialCode: '351',
                countryCode: 'pt'
            },
            {
                name: '',
                dialCode: '1',
                countryCode: 'pr'
            },
            {
                name: '',
                dialCode: '974',
                countryCode: 'qa'
            },
            {
                name: '',
                dialCode: '262',
                countryCode: 're'
            },
            {
                name: '',
                dialCode: '40',
                countryCode: 'ro'
            },
            {
                name: '',
                dialCode: '7',
                countryCode: 'ru'
            },
            {
                name: '',
                dialCode: '250',
                countryCode: 'rw'
            },
            {
                name: '',
                dialCode: '590',
                countryCode: 'bl'
            },
            {
                name: '',
                dialCode: '290',
                countryCode: 'sh'
            },
            {
                name: '',
                dialCode: '1869',
                countryCode: 'kn'
            },
            {
                name: '',
                dialCode: '1758',
                countryCode: 'lc'
            },
            {
                name: '',
                dialCode: '508',
                countryCode: 'pm'
            },
            {
                name: '',
                dialCode: '1784',
                countryCode: 'vc'
            },
            {
                name: '',
                dialCode: '685',
                countryCode: 'ws'
            },
            {
                name: '',
                dialCode: '378',
                countryCode: 'sm'
            },
            {
                name: '',
                dialCode: '239',
                countryCode: 'st'
            },
            {
                name: '',
                dialCode: '966',
                countryCode: 'sa'
            },
            {
                name: '',
                dialCode: '221',
                countryCode: 'sn'
            },
            {
                name: '',
                dialCode: '381',
                countryCode: 'rs'
            },
            {
                name: '',
                dialCode: '248',
                countryCode: 'sc'
            },
            {
                name: '',
                dialCode: '232',
                countryCode: 'sl'
            },
            {
                name: '',
                dialCode: '65',
                countryCode: 'sg'
            },
            {
                name: '',
                dialCode: '1721',
                countryCode: 'sx'
            },
            {
                name: '',
                dialCode: '421',
                countryCode: 'sk'
            },
            {
                name: '',
                dialCode: '386',
                countryCode: 'si'
            },
            {
                name: '',
                dialCode: '677',
                countryCode: 'sb'
            },
            {
                name: '',
                dialCode: '252',
                countryCode: 'so'
            },
            {
                name: '',
                dialCode: '27',
                countryCode: 'za'
            },
            {
                name: '',
                dialCode: '82',
                countryCode: 'kr'
            },
            {
                name: '',
                dialCode: '211',
                countryCode: 'ss'
            },
            {
                name: '',
                dialCode: '34',
                countryCode: 'es'
            },
            {
                name: '',
                dialCode: '94',
                countryCode: 'lk'
            },
            {
                name: '',
                dialCode: '249',
                countryCode: 'sd'
            },
            {
                name: '',
                dialCode: '597',
                countryCode: 'sr'
            },
            {
                name: '',
                dialCode: '47',
                countryCode: 'sj'
            },
            {
                name: '',
                dialCode: '268',
                countryCode: 'sz'
            },
            {
                name: '',
                dialCode: '46',
                countryCode: 'se'
            },
            {
                name: '',
                dialCode: '41',
                countryCode: 'ch'
            },
            {
                name: '',
                dialCode: '963',
                countryCode: 'sy'
            },
            {
                name: '',
                dialCode: '886',
                countryCode: 'tw'
            },
            {
                name: '',
                dialCode: '992',
                countryCode: 'tj'
            },
            {
                name: '',
                dialCode: '255',
                countryCode: 'tz'
            },
            {
                name: '',
                dialCode: '66',
                countryCode: 'th'
            },
            {
                name: '',
                dialCode: '670',
                countryCode: 'tl'
            },
            {
                name: '',
                dialCode: '228',
                countryCode: 'tg'
            },
            {
                name: '',
                dialCode: '690',
                countryCode: 'tk'
            },
            {
                name: '',
                dialCode: '676',
                countryCode: 'to'
            },
            {
                name: '',
                dialCode: '1868',
                countryCode: 'tt'
            },
            {
                name: '',
                dialCode: '216',
                countryCode: 'tn'
            },
            {
                name: '',
                dialCode: '90',
                countryCode: 'tr'
            },
            {
                name: '',
                dialCode: '993',
                countryCode: 'tm'
            },
            {
                name: '',
                dialCode: '1649',
                countryCode: 'tc'
            },
            {
                name: '',
                dialCode: '688',
                countryCode: 'tv'
            },
            {
                name: '',
                dialCode: '1340',
                countryCode: 'vi'
            },
            {
                name: '',
                dialCode: '256',
                countryCode: 'ug'
            },
            {
                name: '',
                dialCode: '380',
                countryCode: 'ua'
            },
            {
                name: '',
                dialCode: '971',
                countryCode: 'ae'
            },
            {
                name: '',
                dialCode: '44',
                countryCode: 'gb'
            },
            {
                name: '',
                dialCode: '1',
                countryCode: 'us'
            },
            {
                name: '',
                dialCode: '598',
                countryCode: 'uy'
            },
            {
                name: '',
                dialCode: '998',
                countryCode: 'uz'
            },
            {
                name: '',
                dialCode: '678',
                countryCode: 'vu'
            },
            {
                name: '',
                dialCode: '39',
                countryCode: 'va'
            },
            {
                name: '',
                dialCode: '58',
                countryCode: 've'
            },
            {
                name: '',
                dialCode: '84',
                countryCode: 'vn'
            },
            {
                name: '',
                dialCode: '681',
                countryCode: 'wf'
            },
            {
                name: '',
                dialCode: '212',
                countryCode: 'eh'
            },
            {
                name: '',
                dialCode: '967',
                countryCode: 'ye'
            },
            {
                name: '',
                dialCode: '260',
                countryCode: 'zm'
            },
            {
                name: '',
                dialCode: '263',
                countryCode: 'zw'
            },
            {
                name: '',
                dialCode: '358',
                countryCode: 'ax'
            }
        ];
        // let get the locale based country names
        countries.forEach(function (country) {
            country.name = LOCALES[locale][country.countryCode].toLowerCase().replace(/\b(\w)/g, function (s) { return s.toUpperCase(); });
        });
        return countries;
    };
    return CountryService;
}());
CountryService.decorators = [
    { type: core.Injectable },
];
/**
 * @nocollapse
 */
CountryService.ctorParameters = function () { return []; };
var LOCALES = {
    'en': {
        'ax': 'AALAND ISLANDS',
        'af': 'AFGHANISTAN',
        'al': 'ALBANIA',
        'dz': 'ALGERIA',
        'as': 'AMERICAN SAMOA',
        'ad': 'ANDORRA',
        'ao': 'ANGOLA',
        'ai': 'ANGUILLA',
        'aq': 'ANTARCTICA',
        'ag': 'ANTIGUA AND BARBUDA',
        'ar': 'ARGENTINA',
        'am': 'ARMENIA',
        'aw': 'ARUBA',
        'au': 'AUSTRALIA',
        'at': 'AUSTRIA',
        'az': 'AZERBAIJAN',
        'bs': 'BAHAMAS',
        'bh': 'BAHRAIN',
        'bd': 'BANGLADESH',
        'bb': 'BARBADOS',
        'by': 'BELARUS',
        'be': 'BELGIUM',
        'bz': 'BELIZE',
        'bj': 'BENIN',
        'bm': 'BERMUDA',
        'bt': 'BHUTAN',
        'bo': 'BOLIVIA',
        'ba': 'BOSNIA AND HERZEGOWINA',
        'bw': 'BOTSWANA',
        'bv': 'BOUVET ISLAND',
        'br': 'BRAZIL',
        'io': 'BRITISH INDIAN OCEAN TERRITORY',
        'bn': 'BRUNEI DARUSSALAM',
        'bg': 'BULGARIA',
        'bf': 'BURKINA FASO',
        'bi': 'BURUNDI',
        'bq': 'CARIBBEAN NETHERLANDS',
        'kh': 'CAMBODIA',
        'cm': 'CAMEROON',
        'ca': 'CANADA',
        'cv': 'CAPE VERDE',
        'ky': 'CAYMAN ISLANDS',
        'cf': 'CENTRAL AFRICAN REPUBLIC',
        'td': 'CHAD',
        'cl': 'CHILE',
        'cn': 'CHINA',
        'cx': 'CHRISTMAS ISLAND',
        'cc': 'COCOS ISLANDS',
        'co': 'COLOMBIA',
        'km': 'COMOROS',
        'cd': 'CONGO',
        'cg': 'CONGO REPUBLIC',
        'ck': 'COOK ISLANDS',
        'cr': 'COSTA RICA',
        'ci': 'COTE DIVOIRE',
        'hr': 'CROATIA ',
        'cu': 'CUBA',
        'cw': 'CURACAO',
        'cy': 'CYPRUS',
        'cz': 'CZECH REPUBLIC',
        'dk': 'DENMARK',
        'dj': 'DJIBOUTI',
        'dm': 'DOMINICA',
        'do': 'DOMINICAN REPUBLIC',
        'ec': 'ECUADOR',
        'eg': 'EGYPT',
        'sv': 'EL SALVADOR',
        'gq': 'EQUATORIAL GUINEA',
        'er': 'ERITREA',
        'ee': 'ESTONIA',
        'et': 'ETHIOPIA',
        'fk': 'FALKLAND ISLANDS (MALVINAS)',
        'fo': 'FAROE ISLANDS',
        'fj': 'FIJI',
        'fi': 'FINLAND',
        'fr': 'FRANCE',
        'gf': 'FRENCH GUIANA',
        'pf': 'FRENCH POLYNESIA',
        'tf': 'FRENCH SOUTHERN TERRITORIES',
        'ga': 'GABON',
        'gm': 'GAMBIA',
        'ge': 'GEORGIA',
        'de': 'GERMANY',
        'gh': 'GHANA',
        'gi': 'GIBRALTAR',
        'gr': 'GREECE',
        'gl': 'GREENLAND',
        'gd': 'GRENADA',
        'gp': 'GUADELOUPE',
        'gu': 'GUAM',
        'gt': 'GUATEMALA',
        'gg': 'GUERNSEY',
        'gn': 'GUINEA',
        'gw': 'GUINEA-BISSAU',
        'gy': 'GUYANA',
        'ht': 'HAITI',
        'hm': 'HEARD AND MC DONALD ISLANDS',
        'hn': 'HONDURAS',
        'hk': 'HONG KONG',
        'hu': 'HUNGARY',
        'is': 'ICELAND',
        'in': 'INDIA',
        'id': 'INDONESIA',
        'ir': 'IRAN ',
        'iq': 'IRAQ',
        'ie': 'IRELAND',
        'im': 'ISLA DE MAN',
        'il': 'ISRAEL',
        'it': 'ITALY',
        'jm': 'JAMAICA',
        'jp': 'JAPAN',
        'je': 'JERSEY',
        'jo': 'JORDAN',
        'kz': 'KAZAKHSTAN',
        'ke': 'KENYA',
        'ki': 'KIRIBATI',
        'kp': 'KOREA NORTH ',
        'kr': 'KOREA SOUTH',
        'xk': 'KOSOVO',
        'kw': 'KUWAIT',
        'kg': 'KYRGYZSTAN',
        'la': 'LAO',
        'lv': 'LATVIA',
        'lb': 'LEBANON',
        'ls': 'LESOTHO',
        'lr': 'LIBERIA',
        'ly': 'LIBYAN ARAB JAMAHIRIYA',
        'li': 'LIECHTENSTEIN',
        'lt': 'LITHUANIA',
        'lu': 'LUXEMBOURG',
        'mo': 'MACAU',
        'mk': 'MACEDONIA',
        'mg': 'MADAGASCAR',
        'mw': 'MALAWI',
        'my': 'MALAYSIA',
        'mv': 'MALDIVES',
        'ml': 'MALI',
        'mt': 'MALTA',
        'mh': 'MARSHALL ISLANDS',
        'mq': 'MARTINIQUE',
        'mr': 'MAURITANIA',
        'mu': 'MAURITIUS',
        'yt': 'MAYOTTE',
        'mx': 'MEXICO',
        'fm': 'MICRONESIA',
        'md': 'MOLDOVA',
        'mc': 'MONACO',
        'mn': 'MONGOLIA',
        'me': 'MONTENEGRO',
        'ms': 'MONTSERRAT',
        'ma': 'MOROCCO',
        'mz': 'MOZAMBIQUE',
        'mm': 'MYANMAR',
        'na': 'NAMIBIA',
        'nr': 'NAURU',
        'np': 'NEPAL',
        'nl': 'NETHERLANDS',
        'an': 'NETHERLANDS ANTILLES',
        'nc': 'NEW CALEDONIA',
        'nz': 'NEW ZEALAND',
        'ni': 'NICARAGUA',
        'ne': 'NIGER',
        'ng': 'NIGERIA',
        'nu': 'NIUE',
        'nf': 'NORFOLK ISLAND',
        'mp': 'NORTHERN MARIANA ISLANDS',
        'no': 'NORWAY',
        'om': 'OMAN',
        'pk': 'PAKISTAN',
        'pw': 'PALAU',
        'ps': 'PALESTINA',
        'pa': 'PANAMA',
        'pg': 'PAPUA NEW GUINEA',
        'py': 'PARAGUAY',
        'pe': 'PERU',
        'ph': 'PHILIPPINES',
        'pn': 'PITCAIRN',
        'pl': 'POLAND',
        'pt': 'PORTUGAL',
        'pr': 'PUERTO RICO',
        'qa': 'QATAR',
        're': 'REUNION',
        'ro': 'ROMANIA',
        'ru': 'RUSSIAN FEDERATION',
        'rw': 'RWANDA',
        'sh': 'SAINT HELENA',
        'kn': 'SAINT KITTS AND NEVIS',
        'lc': 'SAINT LUCIA',
        'pm': 'SAINT PIERRE AND MIQUELON',
        'vc': 'SAINT VINCENT AND THE GRENADINES',
        'ws': 'SAMOA',
        'bl': 'SAN BARTOLOMÉ',
        'sm': 'SAN MARINO',
        'st': 'SAO TOME AND PRINCIPE',
        'sa': 'SAUDI ARABIA',
        'sn': 'SENEGAL',
        'cs': 'SERBIA AND MONTENEGRO',
        'rs': 'SERBIA',
        'sc': 'SEYCHELLES',
        'sl': 'SIERRA LEONE',
        'sg': 'SINGAPORE',
        'sx': 'SINT MAARTEN',
        'sk': 'SLOVAKIA',
        'si': 'SLOVENIA',
        'sb': 'SOLOMON ISLANDS',
        'so': 'SOMALIA',
        'za': 'SOUTH AFRICA',
        'gs': 'SOUTH GEORGIA ISLANDS',
        'es': 'SPAIN',
        'lk': 'SRI LANKA',
        'sd': 'SUDAN',
        'ss': 'SOUTH SUDAN',
        'sr': 'SURINAME',
        'sj': 'SVALBARD AND JAN MAYEN ISLANDS',
        'sz': 'SWAZILAND',
        'se': 'SWEDEN',
        'ch': 'SWITZERLAND',
        'sy': 'SYRIAN ARAB REPUBLIC',
        'tw': 'TAIWAN',
        'tj': 'TAJIKISTAN',
        'tz': 'TANZANIA',
        'th': 'THAILAND',
        'tl': 'TIMOR-LESTE',
        'tg': 'TOGO',
        'tk': 'TOKELAU',
        'to': 'TONGA',
        'tt': 'TRINIDAD AND TOBAGO',
        'tn': 'TUNISIA',
        'tr': 'TURKEY',
        'tm': 'TURKMENISTAN',
        'tc': 'TURKS AND CAICOS ISLANDS',
        'tv': 'TUVALU',
        'ug': 'UGANDA',
        'ua': 'UKRAINE',
        'ae': 'UNITED ARAB EMIRATES',
        'gb': 'UNITED KINGDOM',
        'us': 'UNITED STATES',
        'um': 'UNITED STATES MINOR OUTLYING ISLANDS',
        'uy': 'URUGUAY',
        'uz': 'UZBEKISTAN',
        'vu': 'VANUATU',
        'va': 'VATICAN CITY STATE',
        've': 'VENEZUELA',
        'vn': 'VIET NAM',
        'vg': 'VIRGIN ISLANDS (BRITISH)',
        'vi': 'VIRGIN ISLANDS (U.S.)',
        'wf': 'WALLIS AND FUTUNA ISLANDS',
        'eh': 'WESTERN SAHARA',
        'ye': 'YEMEN',
        'zm': 'ZAMBIA',
        'zw': 'ZIMBABWE '
    },
    'es': {
        'ax': 'ISLAS ÁLAND',
        'af': 'AFGHANISTÁN',
        'al': 'ALBANIA',
        'dz': 'ARGEL',
        'as': 'SAMOA AMERICANA',
        'ad': 'ANDORRA',
        'ao': 'ANGOLA',
        'ai': 'ANGUILA',
        'aq': 'ANTÁRTIDA',
        'ag': 'ANTIGUA Y BARBUDA',
        'ar': 'ARGENTINA',
        'am': 'ARMENIA',
        'aw': 'ARUBA',
        'au': 'AUSTRALIA',
        'at': 'AUSTRIA',
        'az': 'AZERBAIYÁN',
        'bs': 'BAHAMAS',
        'bh': 'BAHRÉIN',
        'bd': 'BANGLADESH',
        'bb': 'BARBADOS',
        'by': 'BELARÚS',
        'be': 'BÉLGICA',
        'bz': 'BELICE',
        'bj': 'BENIN',
        'bm': 'BERMUDAAS',
        'bt': 'BHUTÁN',
        'bo': 'BOLIVIA',
        'ba': 'BOSNIA Y HERZEGOVINA',
        'bw': 'BOTSUANA',
        'bv': 'ISLA BOUVET',
        'br': 'BRASIL',
        'io': 'TERRITORIO BRITÁNICO DEL OCÉANO ÍNDICO',
        'bn': 'BRUNÉI',
        'bg': 'BULGARIA',
        'bf': 'BURKINA FASO',
        'bi': 'BURUNDI',
        'bq': 'CARIBE PAÍSES BAJOS',
        'kh': 'CAMBOYA',
        'cm': 'CAMERÚN',
        'ca': 'CANADÁ',
        'cv': 'CABO VERDE',
        'ky': 'ISLAS CAIMÁN',
        'cf': 'REPÚBLICA CENTRO-AFRICANA',
        'td': 'CHAD',
        'cl': 'CHILE',
        'cn': 'CHINA',
        'cx': 'ISLAS CHRISTMAS',
        'cc': 'ISLAS COCOS',
        'co': 'COLOMBIA',
        'km': 'COMOROS',
        'cd': 'CONGO (ZAIRE)',
        'cg': 'CONGO',
        'ck': 'ISLAS COOK',
        'cr': 'COSTA RICA',
        'ci': 'COSTA DE MARFIL',
        'hr': 'CROACIA ',
        'cu': 'CUBA',
        'cw': 'CURAÇAO',
        'cy': 'CHIPRE',
        'cz': 'REPÚBLICA CHECA',
        'dk': 'DINAMARCA',
        'dj': 'YIBUTI',
        'dm': 'DOMÍNICA',
        'do': 'REPÚBLICA DOMINICANA',
        'ec': 'ECUADOR',
        'eg': 'EGIPTO',
        'sv': 'EL SALVADOR',
        'gq': 'GUINEA ECUATORIAL',
        'er': 'ERITREA',
        'ee': 'ESTONIA',
        'et': 'ETIOPÍA',
        'fk': 'ISLAS MALVINAS',
        'fo': 'ISLAS FAROE',
        'fj': 'FIJI',
        'fi': 'FINLANDIA',
        'fr': 'FRANCIA',
        'gf': 'GUIANA FRANCESA',
        'pf': 'POLYNESIA FRANCESA',
        'tf': 'TERRITORIOS AUSTRALES FRANCESES',
        'ga': 'GABÓN',
        'gm': 'GAMBIA',
        'ge': 'GEORGIA',
        'de': 'ALEMANIA',
        'gh': 'GHANA',
        'gi': 'GIBRALTAR',
        'gr': 'GREECE',
        'gl': 'GROENLANDIA',
        'gd': 'GRANADA',
        'gp': 'GUADALUPE',
        'gu': 'GUAM',
        'gt': 'GUATEMALA',
        'gg': 'GUERNSEY',
        'gn': 'GUINEA',
        'gw': 'GUINEA-BISSAU',
        'gy': 'GUYANA',
        'ht': 'HAITI',
        'hm': 'ISLAS HEARD Y MC DONALD',
        'hn': 'HONDURAS',
        'hk': 'HONG KONG',
        'hu': 'HUNGRÍA',
        'is': 'ISLANDIA',
        'in': 'INDIA',
        'id': 'INDONESIA',
        'ir': 'IRÁN',
        'iq': 'IRAK',
        'ie': 'IRLANDA',
        'im': 'ISLA DE MAN',
        'il': 'ISRAEL',
        'it': 'ITALIA',
        'jm': 'JAMAICA',
        'jp': 'JAPÓN',
        'je': 'JERSEY',
        'jo': 'JORDANIA',
        'kz': 'KAZAJSTÁN',
        'ke': 'KENIA',
        'ki': 'KIRIBATI',
        'kp': 'KOREA DEL NORTE',
        'kr': 'KOREA DEL SUR',
        'xk': 'KOSOVO',
        'kw': 'KUWAIT',
        'kg': 'KIRGUISTÁN',
        'la': 'LAOS',
        'lv': 'LETONIA',
        'lb': 'LÍBANO',
        'ls': 'LESOTHO',
        'lr': 'LIBERIA',
        'ly': 'LIBIA',
        'li': 'LIECHTENSTEIN',
        'lt': 'LITUANIA',
        'lu': 'LUXEMBURGO',
        'mo': 'MACAO',
        'mk': 'MACEDONIA',
        'mg': 'MADAGASCAR',
        'mw': 'MALAWI',
        'my': 'MALASIA',
        'mv': 'MALDIVAS',
        'ml': 'MALI',
        'mt': 'MALTA',
        'mh': 'ISLAS MARSHALL',
        'mq': 'MATINICA',
        'mr': 'MAURITANIA',
        'mu': 'MAURICIO',
        'yt': 'MAYOTTE',
        'mx': 'MÉXICO',
        'fm': 'MICRONESIA',
        'md': 'MOLDOVA',
        'mc': 'MÓNACO',
        'mn': 'MONGOLIA',
        'me': 'MONTENEGRO',
        'ms': 'MONTSERRAT',
        'ma': 'MARRUECOS',
        'mz': 'MOZAMBIQUE',
        'mm': 'MYANMAR',
        'na': 'NAMIBIA',
        'nr': 'NAURU',
        'np': 'NEPAL',
        'nl': 'PAÍSES BAJOS',
        'an': 'ANTILLAS NEERLANDESAS',
        'nc': 'NUEVA CALEDONIA',
        'nz': 'NUEVA ZELANDA',
        'ni': 'NICARAGUA',
        'ne': 'NÍGER',
        'ng': 'NIGERIA',
        'nu': 'NIUE',
        'nf': 'ISLAS NORKFOLK',
        'mp': 'ISLAS MARIANAS DEL NORTE',
        'no': 'NORUEGA',
        'om': 'OMÁN',
        'pk': 'PAKISTÁN',
        'pw': 'ISLAS PALAOS',
        'ps': 'PALESTINA',
        'pa': 'PANAMÁ',
        'pg': 'PAPÚA NUEVA GUINEA',
        'py': 'PARAGUAY',
        'pe': 'PERÚ',
        'ph': 'FILIPINAS',
        'pn': 'ISLAS PITCAIRN',
        'pl': 'POLONIA',
        'pt': 'PORTUGAL',
        'pr': 'PUERTO RICO',
        'qa': 'QATAR',
        're': 'REUNIÓN',
        'ro': 'RUMANÍA',
        'ru': 'RUSIA',
        'rw': 'RUANDA',
        'sh': 'SANTA ELENA',
        'kn': 'SAN CRISTÓBAL Y NIEVES',
        'lc': 'SANTA LUCÍA',
        'pm': 'SAN PEDRO Y MIQUELÓN',
        'vc': 'SAN VICENTE Y LAS GRANADINAS',
        'ws': 'SAMOA',
        'bl': 'SAN BARTOLOMÉ',
        'sm': 'SAN MARINO',
        'st': 'SANTO TOMÉ Y PRÍNCIPE',
        'sa': 'ARABIA SAUDITA',
        'sn': 'SENEGAL',
        'cs': 'SERBIA Y MONTENEGRO',
        'rs': 'SERBIA',
        'sc': 'SEYCHELLES',
        'sl': 'SIERRA LEONA',
        'sg': 'SINGAPUR',
        'sx': 'SINT MAARTEN',
        'sk': 'ESLOVAQUIA',
        'si': 'ESLOVENIA',
        'sb': 'ISLAS SOLOMÓN',
        'so': 'SOMALIA',
        'za': 'SUDÁFRICA',
        'gs': 'GEORGIA DEL SUR E ISLAS SANDWICH DEL SUR',
        'es': 'ESPAÑA',
        'lk': 'SRI LANKA',
        'sd': 'SUDÁN',
        'ss': 'SUDÁN DEL SUR',
        'sr': 'SURINAM',
        'sj': 'ISLAS SVALBARD Y JAN MAYEN',
        'sz': 'SUAZILANDIA',
        'se': 'SUECIA',
        'ch': 'SUIZA',
        'sy': 'SIRIA',
        'tw': 'TAIWÁN',
        'tj': 'TAYIKISTÁN',
        'tz': 'TANZANIA',
        'th': 'TAILANDIA',
        'tl': 'TIMOR-LESTE',
        'tg': 'TOGO',
        'tk': 'TOKELAU',
        'to': 'TONGA',
        'tt': 'TRINIDAD Y TOBAGO',
        'tn': 'TÚNEZ',
        'tr': 'TURQUÍA',
        'tm': 'TURKMENISTÁN',
        'tc': 'ISLAS TURCAS Y CAICOS',
        'tv': 'TUVALU',
        'ug': 'UGANDA',
        'ua': 'UCRANIA',
        'ae': 'EMIRATOS ÁRABES UNIDOS',
        'gb': 'REINO UNIDO',
        'us': 'ESTADOS UNIDOS DE AMÉRICA',
        'um': 'ESTADOS UNIDOS ISLAS MINOR OUTLYING',
        'uy': 'URUGUAY',
        'uz': 'UZBEKISTÁN',
        'vu': 'VANUATU',
        'va': 'CIUDAD DEL VATICANO',
        've': 'VENEZUELA',
        'vn': 'VIETNAM',
        'vg': 'ISLAS VÍRGENES (INGLESAS)',
        'vi': 'ISLAS VÍRGENES (U.S.)',
        'wf': 'WALLIS Y FUTUNA',
        'eh': 'SAHARA OCCIDENTAL',
        'ye': 'YEMEN',
        'zm': 'ZAMBIA',
        'zw': 'ZIMBABUE '
    }
};

var PLUS = '+';
var COUNTER_CONTROL_ACCESSOR = {
    provide: forms.NG_VALUE_ACCESSOR,
    useExisting: core.forwardRef(function () { return PhoneNumberComponent; }),
    multi: true
};
var VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return PhoneNumberComponent; }),
    multi: true
};
var PhoneNumberComponent = (function () {
    /**
     * @param {?} countryService
     * @param {?} phoneComponent
     */
    function PhoneNumberComponent(countryService, phoneComponent) {
        this.countryService = countryService;
        //input
        this.placeholder = 'Enter phone number'; //default
        this.maskData = ''; //default
        this.maxlength = 15; //default
        this.allowDropdown = true;
        this.showDropdown = false;
        this.phoneNumber = '';
        this.value = '';
        this.phoneComponent = phoneComponent;
    }
    /**
     * @return {?}
     */
    PhoneNumberComponent.prototype.ngOnInit = function () {
        this.countries = this.countryService.getCountries();
        this.orderCountriesByName();
    };
    /**
     * Opens the country selection dropdown
     * @return {?}
     */
    PhoneNumberComponent.prototype.displayDropDown = function () {
        if (this.allowDropdown) {
            this.showDropdown = !this.showDropdown;
            this.countryFilter = '';
        }
    };
    /**
     * Hides the country selection dropdown
     * @param {?} event
     * @return {?}
     */
    PhoneNumberComponent.prototype.hideDropdown = function (event) {
        if (!this.phoneComponent.nativeElement.contains(event.target)) {
            this.showDropdown = false;
        }
    };
    /**
     * Sets the selected country code to given country
     * @param {?} event
     * @param {?} countryCode
     * @return {?}
     */
    PhoneNumberComponent.prototype.updateSelectedCountry = function (event, countryCode) {
        event.preventDefault();
        this.updatePhoneInput(countryCode);
        this.updateValue();
    };
    /**
     * Updates the phone number
     * @param {?} event
     * @return {?}
     */
    PhoneNumberComponent.prototype.updatePhoneNumber = function (event) {
        if (PhoneNumberComponent.startsWithPlus(this.phoneNumber)) {
            this.findPrefix(this.phoneNumber.split(PLUS)[1]);
        }
        else {
            this.selectedCountry = null;
        }
        this.updateValue();
    };
    /**
     * shows the dropdown with keyboard event
     * @param {?} event
     * @return {?}
     */
    PhoneNumberComponent.prototype.handleKeyboardEvent = function (event) {
        if (this.showDropdown) {
            this.countryFilter = "" + this.countryFilter + event.key;
        }
    };
    /**
     *
     * @param {?} prefix
     * @return {?}
     */
    PhoneNumberComponent.prototype.findPrefix = function (prefix) {
        var /** @type {?} */ foundPrefixes = this.countries.filter(function (country) { return prefix.startsWith(country.dialCode); });
        if (foundPrefixes && foundPrefixes.length)
            this.selectedCountry = PhoneNumberComponent.reducePrefixes(foundPrefixes);
        else
            this.selectedCountry = null;
    };
    /**
     * Sort countries by name
     * @return {?}
     */
    PhoneNumberComponent.prototype.orderCountriesByName = function () {
        this.countries = this.countries.sort(function (a, b) { return (a['name'] > b['name']) ? 1 : ((b['name'] > a['name']) ? -1 : 0); });
    };
    /**
     *
     * @param {?} fn
     * @return {?}
     */
    PhoneNumberComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    /**
     *
     * @param {?} fn
     * @return {?}
     */
    PhoneNumberComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    /**
     *
     * @param {?} value
     * @return {?}
     */
    PhoneNumberComponent.prototype.writeValue = function (value) {
        this.value = value || '';
        this.phoneNumber = this.value;
        if (PhoneNumberComponent.startsWithPlus(this.value)) {
            this.findPrefix(this.value.split(PLUS)[1]);
            if (this.selectedCountry) {
                this.updatePhoneInput(this.selectedCountry.countryCode);
            }
        }
        if (this.defaultCountry) {
            this.updatePhoneInput(this.defaultCountry);
        }
    };
    /**
     * Validation
     * @param {?} c
     * @return {?}
     */
    PhoneNumberComponent.prototype.validate = function (c) {
        var /** @type {?} */ value = c.value;
        var /** @type {?} */ selectedDialCode = this.getSelectedCountryDialCode();
        var /** @type {?} */ validationError = {
            phoneEmptyError: {
                valid: false
            }
        };
        if (this.required && !value) {
            // if (value && selectedDialCode)
            //     value = value.replace(/\s/g, '').replace(selectedDialCode, '');
            // if (!value) return validationError;
            return validationError;
        }
        if (value) {
            // validating number using the google's lib phone
            var /** @type {?} */ phoneUtil = glibphone.PhoneNumberUtil.getInstance();
            try {
                var /** @type {?} */ phoneNumber = phoneUtil.parse(value);
                var /** @type {?} */ isValidNumber = phoneUtil.isValidNumber(phoneNumber);
                return isValidNumber ? null : validationError;
            }
            catch (ex) {
                return validationError;
            }
        }
        return null;
    };
    /**
     * Updates the value and trigger changes
     * @return {?}
     */
    PhoneNumberComponent.prototype.updateValue = function () {
        this.value = this.phoneNumber.replace(/ /g, '');
        this.onModelChange(this.value);
        this.onTouch();
    };
    /**
     * Updates the input
     * @param {?} countryCode
     * @return {?}
     */
    PhoneNumberComponent.prototype.updatePhoneInput = function (countryCode) {
        this.showDropdown = false;
        var /** @type {?} */ newInputValue = PhoneNumberComponent.startsWithPlus(this.phoneNumber)
            ? "" + this.phoneNumber.split(PLUS)[1].substr(this.selectedCountry.dialCode.length, this.phoneNumber.length)
            : this.phoneNumber;
        this.selectedCountry = this.countries.find(function (country) { return country.countryCode === countryCode; });
        if (this.selectedCountry)
            this.phoneNumber = "" + PLUS + this.selectedCountry.dialCode + " " + newInputValue.replace(/ /g, '');
        else
            this.phoneNumber = "" + newInputValue.replace(/ /g, '');
    };
    /**
     * Util function to check if given text starts with plus sign
     * @param {?} text
     * @return {?}
     */
    PhoneNumberComponent.startsWithPlus = function (text) {
        return text.startsWith(PLUS);
    };
    /**
     * Returns the selected country's dialcode
     * @return {?}
     */
    PhoneNumberComponent.prototype.getSelectedCountryDialCode = function () {
        if (this.selectedCountry)
            return PLUS + this.selectedCountry.dialCode;
        return null;
    };
    /**
     * Reduced the prefixes
     * @param {?} foundPrefixes
     * @return {?}
     */
    PhoneNumberComponent.reducePrefixes = function (foundPrefixes) {
        return foundPrefixes.reduce(function (first, second) {
            return first.dialCode.length > second.dialCode.length
                ? first
                : second;
        });
    };
    return PhoneNumberComponent;
}());
PhoneNumberComponent.decorators = [
    { type: core.Component, args: [{ selector: 'international-phone-number',
                template: "<div class=\"input-group\"> <span class=\"input-group-addon flagInput\"> <div class=\"dropdown\"> <button type=\"button\" class=\"dropbtn btn\" (click)=\"displayDropDown()\"> <span [class]=\"'flag flag-' + selectedCountry.countryCode\" *ngIf=\"selectedCountry\"></span> <span class=\"defaultCountry\" *ngIf=\"!selectedCountry\"></span> <span class=\"arrow-down\"></span> </button> <div class=\"dropdown-content\" *ngIf=\"showDropdown\" clickOutside> <div class=\"list-group scrollable-menu\"> <a href=\"#\" class=\"list-group-item\" *ngFor=\"let country of countries | country: countryFilter\" (click)=\"updateSelectedCountry($event, country.countryCode)\"> <span [class]=\"'flag flag-' + country.countryCode\"></span> <span class=\"country-name\">{{ country.name }}  <span class=\"dial-code\">+ {{ country.dialCode}}</span></span> </a> </div> </div> </div> </span> <! -- if required --> <input onlyNumber=\"true\" class=\"form-control\" [attr.maxlength]=\"maxlength\" [(ngModel)]=\"phoneNumber\" (ngModelChange)=\"updatePhoneNumber($event)\" mask=\"maskData\"  [placeholder]=\"placeholder\" *ngIf=\"required\" required> <! -- if not required --> <input onlyNumber=\"true\" class=\"form-control\" [attr.maxlength]=\"maxlength\" [(ngModel)]=\"phoneNumber\" (ngModelChange)=\"updatePhoneNumber($event)\"  [placeholder]=\"placeholder\" *ngIf=\"!required\"> </div>",
                styles: [".country-name { margin-left: 6px; } .dial-code { color: #999; } .scrollable-menu { height: auto; max-height: 200px; width: 350px; overflow-x: hidden; } .flagInput { padding: 0 !important; } .input-group-addon { text-align: left; } .btn-flag { border-color: white; } .btn:hover, .btn:focus { background-color: white; } .defaultCountry { background: url(\"http://res.cloudinary.com/dvbuhh0bl/image/upload/c_scale,h_15,w_15/v1495279723/default_tmey2r.png\") no-repeat; display: inline-block; width: 15px; height: 15px; } .list-group { margin-bottom: 0; } /* Dropdown Button */ .dropbtn { background-color: white; color: white; border: none; cursor: pointer; } .dropdown { position: relative; display: inline-block; } .dropdown-content { position: absolute; background-color: #f9f9f9; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); z-index: 1000; } .dropdown-content a { color: black; padding: 12px 16px; text-decoration: none; display: block; } .arrow-down { display: inline-block; vertical-align: text-top; margin-top: 5px; margin-left: 2px; width: 0; height: 0; border-left: 5px solid transparent; border-right: 5px solid transparent; border-top: 5px solid #444; } ",
                    "/*! * Generated with CSS Flag Sprite generator (https://www.flag-sprites.com/) */.flag{display:inline-block;width:16px;height:11px;background:url('http://res.cloudinary.com/dvbuhh0bl/image/upload/v1495279723/flags_boi3c5.png') no-repeat}.flag.flag-af{background-position:-32px 0}.flag.flag-ky{background-position:-128px -77px}.flag.flag-in{background-position:-64px -66px}.flag.flag-mm{background-position:-192px -88px}.flag.flag-td{background-position:-240px -132px}.flag.flag-dm{background-position:-80px -33px}.flag.flag-se{background-position:-208px -121px}.flag.flag-pr{background-position:-224px -110px}.flag.flag-bj{background-position:-112px -11px}.flag.flag-gr{background-position:-48px -55px}.flag.flag-um{background-position:-256px -143px}.flag.flag-ps{background-position:-240px -110px}.flag.flag-fi{background-position:0 -44px}.flag.flag-kr{background-position:-80px -77px}.flag.flag-nl{background-position:-240px -99px}.flag.flag-bo{background-position:-160px -11px}.flag.flag-bf{background-position:-48px -11px}.flag.flag-ba{background-position:-256px 0}.flag.flag-ax{background-position:-224px 0}.flag.flag-pf{background-position:-112px -110px}.flag.flag-eg{background-position:-160px -33px}.flag.flag-sb{background-position:-144px -121px}.flag.flag-dk{background-position:-64px -33px}.flag.flag-ci{background-position:-112px -22px}.flag.flag-ic{background-position:-240px -55px}.flag.flag-cl{background-position:-144px -22px}.flag.flag-zw{background-position:-32px -165px}.flag.flag-my{background-position:-112px -99px}.flag.flag-li{background-position:-208px -77px}.flag.flag-mc{background-position:-80px -88px}.flag.flag-fo{background-position:-64px -44px}.flag.flag-vu{background-position:-144px -154px}.flag.flag-al{background-position:-80px 0}.flag.flag-ge{background-position:-144px -44px}.flag.flag-somaliland{background-position:-96px -132px}.flag.flag-am{background-position:-96px 0}.flag.flag-tf{background-position:-256px -132px}.flag.flag-ni{background-position:-224px -99px}.flag.flag-tn{background-position:-112px -143px}.flag.flag-lv{background-position:-32px -88px}.flag.flag-vi{background-position:-112px -154px}.flag.flag-ve{background-position:-80px -154px}.flag.flag-gm{background-position:-256px -44px}.flag.flag-fm{background-position:-48px -44px}.flag.flag-mg{background-position:-128px -88px}.flag.flag-mh{background-position:-144px -88px}.flag.flag-tc{background-position:-224px -132px}.flag.flag-id{background-position:-256px -55px}.flag.flag-tw{background-position:-192px -143px}.flag.flag-so{background-position:-80px -132px}.flag.flag-pg{background-position:-128px -110px}.flag.flag-hk{background-position:-144px -55px}.flag.flag-mt{background-position:-32px -99px}.flag.flag-do{background-position:-96px -33px}.flag.flag-gg{background-position:-192px -44px}.flag.flag-nr{background-position:-16px -110px}.flag.flag-mp{background-position:-240px -88px}.flag.flag-mw{background-position:-80px -99px}.flag.flag-bb{background-position:0 -11px}.flag.flag-hu{background-position:-224px -55px}.flag.flag-xk{background-position:-208px -154px}.flag.flag-za{background-position:-256px -154px}.flag.flag-zanzibar{background-position:0 -165px}.flag.flag-sy{background-position:-192px -132px}.flag.flag-bi{background-position:-96px -11px}.flag.flag-qa{background-position:-32px -121px}.flag.flag-kurdistan{background-position:-96px -77px}.flag.flag-scotland{background-position:-176px -121px}.flag.flag-gf{background-position:-160px -44px}.flag.flag-tk{background-position:-64px -143px}.flag.flag-me{background-position:-112px -88px}.flag.flag-om{background-position:-64px -110px}.flag.flag-tv{background-position:-176px -143px}.flag.flag-at{background-position:-176px 0}.flag.flag-by{background-position:-256px -11px}.flag.flag-wf{background-position:-176px -154px}.flag.flag-ph{background-position:-144px -110px}.flag.flag-ke{background-position:-240px -66px}.flag.flag-ng{background-position:-208px -99px}.flag.flag-eh{background-position:-176px -33px}.flag.flag-yt{background-position:-240px -154px}.flag.flag-cg{background-position:-80px -22px}.flag.flag-br{background-position:-176px -11px}.flag.flag-ma{background-position:-64px -88px}.flag.flag-bm{background-position:-128px -11px}.flag.flag-gi{background-position:-224px -44px}.flag.flag-mn{background-position:-208px -88px}.flag.flag-eu{background-position:-256px -33px}.flag.flag-us{background-position:0 -154px}.flag.flag-uy{background-position:-16px -154px}.flag.flag-hn{background-position:-176px -55px}.flag.flag-gp{background-position:-16px -55px}.flag.flag-km{background-position:-32px -77px}.flag.flag-au{background-position:-192px 0}.flag.flag-tz{background-position:-208px -143px}.flag.flag-pt{background-position:-256px -110px}.flag.flag-je{background-position:-176px -66px}.flag.flag-md{background-position:-96px -88px}.flag.flag-pl{background-position:-176px -110px}.flag.flag-cr{background-position:-208px -22px}.flag.flag-sk{background-position:-16px -132px}.flag.flag-kg{background-position:-256px -66px}.flag.flag-nu{background-position:-32px -110px}.flag.flag-lr{background-position:-240px -77px}.flag.flag-ht{background-position:-208px -55px}.flag.flag-rw{background-position:-112px -121px}.flag.flag-sg{background-position:-224px -121px}.flag.flag-ag{background-position:-48px 0}.flag.flag-mx{background-position:-96px -99px}.flag.flag-ch{background-position:-96px -22px}.flag.flag-sz{background-position:-208px -132px}.flag.flag-dj{background-position:-48px -33px}.flag.flag-kn{background-position:-48px -77px}.flag.flag-england{background-position:-192px -33px}.flag.flag-ro{background-position:-64px -121px}.flag.flag-ca{background-position:-16px -22px}.flag.flag-tr{background-position:-144px -143px}.flag.flag-pa{background-position:-80px -110px}.flag.flag-ye{background-position:-224px -154px}.flag.flag-si{background-position:-256px -121px}.flag.flag-tt{background-position:-160px -143px}.flag.flag-ml{background-position:-176px -88px}.flag.flag-sl{background-position:-32px -132px}.flag.flag-sa{background-position:-128px -121px}.flag.flag-py{background-position:-16px -121px}.flag.flag-ad{background-position:0 0}.flag.flag-gy{background-position:-128px -55px}.flag.flag-ls{background-position:-256px -77px}.flag.flag-sj{background-position:0 -132px}.flag.flag-fk{background-position:-32px -44px}.flag.flag-kw{background-position:-112px -77px}.flag.flag-sm{background-position:-48px -132px}.flag.flag-vn{background-position:-128px -154px}.flag.flag-iq{background-position:-96px -66px}.flag.flag-ie{background-position:0 -66px}.flag.flag-mz{background-position:-128px -99px}.flag.flag-vg{background-position:-96px -154px}.flag.flag-ms{background-position:-16px -99px}.flag.flag-cw{background-position:-256px -22px}.flag.flag-bt{background-position:-208px -11px}.flag.flag-gn{background-position:0 -55px}.flag.flag-uz{background-position:-32px -154px}.flag.flag-cv{background-position:-240px -22px}.flag.flag-pw{background-position:0 -121px}.flag.flag-bv{background-position:-224px -11px}.flag.flag-lb{background-position:-176px -77px}.flag.flag-sn{background-position:-64px -132px}.flag.flag-la{background-position:-160px -77px}.flag.flag-pe{background-position:-96px -110px}.flag.flag-sx{background-position:-176px -132px}.flag.flag-fr{background-position:-80px -44px}.flag.flag-catalonia{background-position:-32px -22px}.flag.flag-kh{background-position:0 -77px}.flag.flag-jp{background-position:-224px -66px}.flag.flag-vc{background-position:-64px -154px}.flag.flag-hm{background-position:-160px -55px}.flag.flag-tl{background-position:-80px -143px}.flag.flag-no{background-position:-256px -99px}.flag.flag-ee{background-position:-144px -33px}.flag.flag-cz{background-position:-16px -33px}.flag.flag-gw{background-position:-112px -55px}.flag.flag-ai{background-position:-64px 0}.flag.flag-ar{background-position:-144px 0}.flag.flag-co{background-position:-192px -22px}.flag.flag-na{background-position:-144px -99px}.flag.flag-er{background-position:-208px -33px}.flag.flag-pm{background-position:-192px -110px}.flag.flag-bg{background-position:-64px -11px}.flag.flag-sr{background-position:-112px -132px}.flag.flag-cm{background-position:-160px -22px}.flag.flag-il{background-position:-16px -66px}.flag.flag-tibet{background-position:-32px -143px}.flag.flag-lk{background-position:-224px -77px}.flag.flag-et{background-position:-240px -33px}.flag.flag-rs{background-position:-80px -121px}.flag.flag-th{background-position:-16px -143px}.flag.flag-tm{background-position:-96px -143px}.flag.flag-fj{background-position:-16px -44px}.flag.flag-ki{background-position:-16px -77px}.flag.flag-re{background-position:-48px -121px}.flag.flag-nf{background-position:-192px -99px}.flag.flag-kz{background-position:-144px -77px}.flag.flag-nc{background-position:-160px -99px}.flag.flag-bn{background-position:-144px -11px}.flag.flag-gb{background-position:-112px -44px}.flag.flag-mq{background-position:-256px -88px}.flag.flag-sc{background-position:-160px -121px}.flag.flag-gu{background-position:-96px -55px}.flag.flag-io{background-position:-80px -66px}.flag.flag-cd{background-position:-48px -22px}.flag.flag-tg{background-position:0 -143px}.flag.flag-sv{background-position:-160px -132px}.flag.flag-jo{background-position:-208px -66px}.flag.flag-ua{background-position:-224px -143px}.flag.flag-ga{background-position:-96px -44px}.flag.flag-cu{background-position:-224px -22px}.flag.flag-va{background-position:-48px -154px}.flag.flag-mu{background-position:-48px -99px}.flag.flag-hr{background-position:-192px -55px}.flag.flag-to{background-position:-128px -143px}.flag.flag-bh{background-position:-80px -11px}.flag.flag-ec{background-position:-128px -33px}.flag.flag-ug{background-position:-240px -143px}.flag.flag-de{background-position:-32px -33px}.flag.flag-gq{background-position:-32px -55px}.flag.flag-bd{background-position:-16px -11px}.flag.flag-bs{background-position:-192px -11px}.flag.flag-ck{background-position:-128px -22px}.flag.flag-gd{background-position:-128px -44px}.flag.flag-sh{background-position:-240px -121px}.flag.flag-be{background-position:-32px -11px}.flag.flag-mr{background-position:0 -99px}.flag.flag-tj{background-position:-48px -143px}.flag.flag-gl{background-position:-240px -44px}.flag.flag-as{background-position:-160px 0}.flag.flag-es{background-position:-224px -33px}.flag.flag-zm{background-position:-16px -165px}.flag.flag-wales{background-position:-160px -154px}.flag.flag-np{background-position:0 -110px}.flag.flag-lu{background-position:-16px -88px}.flag.flag-st{background-position:-144px -132px}.flag.flag-ao{background-position:-128px 0}.flag.flag-cf{background-position:-64px -22px}.flag.flag-az{background-position:-240px 0}.flag.flag-bw{background-position:-240px -11px}.flag.flag-nz{background-position:-48px -110px}.flag.flag-cy{background-position:0 -33px}.flag.flag-ne{background-position:-176px -99px}.flag.flag-kp{background-position:-64px -77px}.flag.flag-gs{background-position:-64px -55px}.flag.flag-mk{background-position:-160px -88px}.flag.flag-mo{background-position:-224px -88px}.flag.flag-jm{background-position:-192px -66px}.flag.flag-ws{background-position:-192px -154px}.flag.flag-lc{background-position:-192px -77px}.flag.flag-an{background-position:-112px 0}.flag.flag-gh{background-position:-208px -44px}.flag.flag-im{background-position:-48px -66px}.flag.flag-is{background-position:-128px -66px}.flag.flag-ae{background-position:-16px 0}.flag.flag-it{background-position:-144px -66px}.flag.flag-ss{background-position:-128px -132px}.flag.flag-ly{background-position:-48px -88px}.flag.flag-mv{background-position:-64px -99px}.flag.flag-ir{background-position:-112px -66px}.flag.flag-gt{background-position:-80px -55px}.flag.flag-bz{background-position:0 -22px}.flag.flag-dz{background-position:-112px -33px}.flag.flag-lt{background-position:0 -88px}.flag.flag-sd{background-position:-192px -121px}.flag.flag-pk{background-position:-160px -110px}.flag.flag-ru{background-position:-96px -121px}.flag.flag-pn{background-position:-208px -110px}.flag.flag-cn{background-position:-176px -22px}.flag.flag-aw{background-position:-208px 0} "],
                host: {
                    '(document:click)': 'hideDropdown($event)',
                },
                providers: [COUNTER_CONTROL_ACCESSOR, VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
PhoneNumberComponent.ctorParameters = function () { return [
    { type: CountryService, },
    { type: core.ElementRef, },
]; };
PhoneNumberComponent.propDecorators = {
    'maskData': [{ type: core.Input },],
    'placeholder': [{ type: core.Input },],
    'maxlength': [{ type: core.Input },],
    'defaultCountry': [{ type: core.Input },],
    'required': [{ type: core.Input },],
    'allowDropdown': [{ type: core.Input },],
    'handleKeyboardEvent': [{ type: core.HostListener, args: ['document:keypress', ['$event'],] },],
};

var OnlyNumberDirective = (function () {
    /**
     * @param {?} el
     */
    function OnlyNumberDirective(el) {
        this.el = el;
        this.regexStr = '^[0-9]*$';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    OnlyNumberDirective.prototype.onKeyDown = function (event) {
        var /** @type {?} */ e = (event);
        if (this.onlyNumber) {
            if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode === 65 && e.ctrlKey === true) ||
                // Allow: Ctrl+C
                (e.keyCode === 67 && e.ctrlKey === true) ||
                // Allow: Ctrl+V
                (e.keyCode === 86 && e.ctrlKey === true) ||
                // Allow: Ctrl+X
                (e.keyCode === 88 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39) ||
                // Allow plus button
                (e.keyCode === 107) || (e.keyCode === 187)) {
                // let it happen, don't do anything
                return;
            }
            var /** @type {?} */ ch = String.fromCharCode(e.keyCode);
            var /** @type {?} */ regEx = new RegExp(this.regexStr);
            if (regEx.test(ch)) {
                return;
            }
            else if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        }
    };
    return OnlyNumberDirective;
}());
OnlyNumberDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[onlyNumber]'
            },] },
];
/**
 * @nocollapse
 */
OnlyNumberDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
OnlyNumberDirective.propDecorators = {
    'onlyNumber': [{ type: core.Input },],
    'onKeyDown': [{ type: core.HostListener, args: ['keydown', ['$event'],] },],
};

var CountryPipe = (function () {
    function CountryPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    CountryPipe.prototype.transform = function (value, args) {
        var /** @type {?} */ searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (country) { return country.name.search(searchText) !== -1; });
        }
    };
    return CountryPipe;
}());
CountryPipe.decorators = [
    { type: core.Pipe, args: [{
                name: 'country'
            },] },
];
/**
 * @nocollapse
 */
CountryPipe.ctorParameters = function () { return []; };

var InternationalPhoneNumberModule = (function () {
    function InternationalPhoneNumberModule() {
    }
    /**
     * @return {?}
     */
    InternationalPhoneNumberModule.forRoot = function () {
        return {
            ngModule: InternationalPhoneNumberModule,
            providers: [CountryService]
        };
    };
    return InternationalPhoneNumberModule;
}());
InternationalPhoneNumberModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule
                ],
                declarations: [
                    PhoneNumberComponent,
                    OnlyNumberDirective,
                    CountryPipe
                ],
                exports: [
                    PhoneNumberComponent,
                    CountryPipe
                ],
                providers: [CountryService]
            },] },
];
/**
 * @nocollapse
 */
InternationalPhoneNumberModule.ctorParameters = function () { return []; };

exports.InternationalPhoneNumberModule = InternationalPhoneNumberModule;
exports.CountryService = CountryService;
exports.CountryPipe = CountryPipe;
exports.PhoneNumberComponent = PhoneNumberComponent;
exports.OnlyNumberDirective = OnlyNumberDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
