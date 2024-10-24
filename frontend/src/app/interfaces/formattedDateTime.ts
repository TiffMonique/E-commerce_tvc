export type Locale =
    | 'es-HN'
    | 'es-GT'
    | 'es-SV'
    | 'es-NI'
    | 'es-CR'
    | 'es-PA'
    | 'es-BZ'
    | 'en-US'
    | 'es-ES';

export interface FormattedDateTimeOptions extends Intl.DateTimeFormatOptions {
    locale?: Locale;
}
