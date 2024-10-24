import { FormattedDateTimeOptions } from "../interfaces/formattedDateTime";


export const useFormattedDateTime = (
    options?: FormattedDateTimeOptions
): (dateTime: Date) => string => {
    const defaultOptions: FormattedDateTimeOptions = {
        locale: 'es-HN',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        ...options,
    }
    const formatter = (dateTime: Date, options = defaultOptions) => {
        const formatted = new Date(dateTime).toLocaleDateString(defaultOptions.locale, options);
        return formatted;
    }

    return formatter;
}