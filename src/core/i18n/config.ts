export const defaultLocale = 'uk';

export const timeZone = 'Europe/Amsterdam';

export const locales = [defaultLocale, 'ru'] as const;

export const localesMap = [
  { key: 'uk', title: 'Українська' },
  { key: 'ru', title: 'Русский' },
];
