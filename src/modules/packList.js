import Pack from './pack.js'

export default class PackList {
  constructor(container, array) {
    this._container = container;
    this._array = array;
    this._packs = [];
  }

  add(...args) {
    const { packElement } = new Pack(...args);
    this._packs.push(packElement);
    this._container.appendChild(packElement);
  }

  render() {
    this._array.forEach(pack => {
      this.add(
        pack.id,
        pack.image,
        pack.title,
        pack.text,
        pack.price
      );
    });
  }
}
