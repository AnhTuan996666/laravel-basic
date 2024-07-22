import Cookies from "js-cookie";

class Cookie {
  static get(key) {
    return Cookies.get(key);
  }

  static set(key, value, time = 36000) {
    Cookies.set(key, value, {
      expires: time,
    });
  }

  static remove(key) {
    Cookies.remove(key);
  }
}

export { Cookie };
