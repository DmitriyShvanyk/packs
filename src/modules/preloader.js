export default class Preloader {
  load(ms) {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, ms);
    });
  }
}