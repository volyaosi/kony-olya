//cookie
export class Cookie {
  static set(cname, cvalue) {
    document.cookie = `${cname}=${cvalue}`;
  }

  static get(cname) {
    const name = `${cname}=`;
    const c = document.cookie.split(/\;\s?/).find((el) => el.startsWith(name));

    return c?.slice(name.length) || "";
  }

  static del(cname) {
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}
