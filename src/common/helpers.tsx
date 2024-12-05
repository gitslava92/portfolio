import { capitalize } from "@common/i18n";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/ru";
import localizedFormat from "dayjs/plugin/localizedFormat";
import {experiences} from "@components/Organisms/Experience/Experience";

dayjs.extend(localizedFormat);

export const getPeriod = (period: string[], tc: (msg: string) => string) => {
  const language = localStorage.getItem("language") || "ru";
  const format = language === "ru" ? "MMMM, YYYY" : "MMM, YYYY";

  dayjs.locale(language);

  if (period.length > 1) {
    return `${capitalize(dayjs(period[0]).format(format))} - ${
      period[1] === "present"
        ? tc(period[1])
        : capitalize(dayjs(period[1]).format(format))
    }`;
  } else
    return `${
      period[0] === "present"
        ? tc(period[0])
        : capitalize(dayjs(period[0]).format(format))
    }`;
};

const getYearUnit = (years: number) => {
  const lastDigit = years % 10;
  const lastTwoDigits = years % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return 'Hello.YearUnitOne';
  }
  if (lastDigit === 1) {
    return 'Hello.YearUnitTwo';
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return 'Hello.YearUnitThree';
  }
  return 'Hello.YearUnitOne';
}

const getMonthUnit = (months: number) => {
  const lastDigit = months % 10;
  const lastTwoDigits = months % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return 'Hello.MonthUnitOne';
  }
  if (lastDigit === 1) {
    return 'Hello.MonthUnitTwo';
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return 'Hello.MonthUnitThree';
  }
  return 'Hello.MonthUnitOne';
}

export const getExperience = (t: (msg: string) => string) => {
  const start = dayjs(experiences[3].period[0]);
  const end = dayjs();

  const years = end.diff(start, 'year');
  const months = end.diff(start.add(years, 'year'), 'month');

  const yearUnit = getYearUnit(years);
  const monthUnit = getMonthUnit(months);
  const monthText = `${t('Hello.And')} ${months} ${t(monthUnit)}`

  return `${years} ${t(yearUnit)}${months ? monthText : ''}`;
}

