export const LETTERS_AND_SPACES_REGEX = /^[a-zA-Z\s]+$/;

export const NO_NUMBERS_REGEX = /^([^0-9]*)$/;

export const ONLY_NUMBERS_REGEX = /^[0-9]+(\.[0-9]+)?$/;

export const ONLY_NUMBERS_WITH_DECIMAL_SREGEX = /[^0-9.]/g;

export const COUNTRY_CODE_REGEX = /^[A-Z]{2}$/;

export const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

export const PHONE_NUMBER_REGEX = /^[+]?[\d\s\-()]+$/;

export const HTTPS_REGEX = /^https:\/\//;
