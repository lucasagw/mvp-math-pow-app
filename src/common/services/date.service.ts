import { DateTime } from 'luxon';

export class DateService {
  defaultFormat = 'yyyy-MM-dd HH:mm';
  localeOptions = { zone: 'America/Sao_Paulo', locale: 'pt-BR' };

  public fromDateString(value: string): DateTime {
    return DateTime.fromFormat(value, this.defaultFormat, this.localeOptions);
  }

  public now(): DateTime {
    const { zone, locale } = this.localeOptions;
    return DateTime.now().setZone(zone).setLocale(locale);
  }

  public isDate(value: string): boolean {
    return DateTime.fromFormat(value, this.defaultFormat).isValid;
  }

  public fromJSDate(value: Date): DateTime {
    return DateTime.fromJSDate(value);
  }

  public toDateString(value: DateTime): string {
    return value.toFormat(this.defaultFormat, this.localeOptions);
  }

  public formatDateToYYYYMMDDHHMM(date: Date) {
    const luxonDate = DateTime.fromJSDate(date);
    const formattedDate = luxonDate.toFormat('yyyy-MM-dd HH:mm');
    return formattedDate;
  }
  public formatDateToHHMMDDMMYYY(date: Date) {
    const luxonDate = DateTime.fromJSDate(date);
    const formattedDate = luxonDate.toFormat('dd/MM/yyyy');
    return formattedDate;
  }

  public formatDateToYYYYMMDD(date: Date) {
    const luxonDate = DateTime.fromJSDate(date);
    const formattedDate = luxonDate.toFormat('yyyy-MM-dd');
    return formattedDate;
  }

  public formatDateTOHHMM(date: Date) {
    const luxonDate = DateTime.fromJSDate(date);
    const formattedDate = luxonDate.toFormat('HH:mm');
    return formattedDate;
  }

  public formatToMilliseconds(date: number) {
    const luxonDate = DateTime.fromMillis(date);
    return luxonDate;
  }
}

const dateService = new DateService();

export default dateService;
