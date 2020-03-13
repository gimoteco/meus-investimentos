export const APP_KEY_PREFIX = "meus-investimentos";

function getAppKey(key) {
  return `${APP_KEY_PREFIX}-${key}`;
}

class Storage {
  static write(key, value) {
    localStorage.setItem(getAppKey(key), value);
  }

  static read(key) {
    return localStorage.getItem(getAppKey(key));
  }
}

export default Storage;
