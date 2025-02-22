export enum PATHS {
  HOME = "/portfolio/",
  CV_EN = '/portfolio/pustovit-slava-cv-en.pdf',
  CV_RU = '/portfolio/pustovit-slava-cv-ru.pdf',
}

export enum CONTACTS_LINKS {
  PHONE = "+79783165315",
  EMAIL = "webslava92@gmail.com",
  ADDRESS = "Russia, Sevastopol",
  MAP_LINK = "https://yandex.ru/maps/-/CDbH4MIi",
  TELEGRAM = "webslava92",
}

export const PATTERNS = {
  EMAIL:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PASSWORD:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()-=_+[\]{}|;:'",.<>/?`~]+$/,
  URI: /\w+:(\/?\/?)\S+/gm,
  MULTIPLE_VALUES_REGEX: /[ \t\n]/,
  MULTIPLE_VALUES_REGEX_WITHOUT_SPACE: /[\t\n]/,
  TELEGRAM: /^[a-zA-Z0-9_]{5,32}$/,
  TELEGRAM_LINK: /^https:\/\/t\.me\/[a-zA-Z0-9_]{5,32}$/,
  PHONE: /^\+?[1-9][0-9]{7,14}$/,
};

export enum LANDING_SECTIONS {
  Hello = "hello",
  Skills = "skills",
  Experience = "experience",
  Education = "education",
  Portfolio = "portfolio",
  Feedback = "feedback",
  Contact = "contact",
}

export enum UI {
  DrawerWidth = 240,
}

export const LANGUAGE_KEY = "language";

export const EMAIL_URL = 'http://vds2430312.my-ihor.ru:3000/send-message';
