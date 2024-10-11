import { Animal } from "./animal.js";



export class Aguila extends Animal {
  constructor(nombre, edad, imagen, comentarios, sonido) {
    super(nombre, edad, imagen, comentarios, sonido);
  }

  Chillar(nuevoSonido) {
    this._sonido = nuevoSonido;
    return this._sonido();
  }
}

export class Leon extends Animal {
  constructor(nombre, edad, imagen, comentarios, sonido) {
    super(nombre, edad, imagen, comentarios, sonido);
  }

  Rugir(nuevoSonido) {
    this._sonido = nuevoSonido;
    return this._sonido();

  }
}

export class Lobo extends Animal {
  constructor(nombre, edad, imagen, comentarios, sonido) {
    super(nombre, edad, imagen, comentarios, sonido);
  }

  Aullar(nuevoSonido) {
    this._sonido = nuevoSonido;
    return this._sonido();
  }
}

export class Oso extends Animal {
  constructor(nombre, edad, imagen, comentarios, sonido) {
    super(nombre, edad, imagen, comentarios, sonido);
  }

  Grunir(nuevoSonido) {
    this._sonido = nuevoSonido;
    return this._sonido();
  }
}

export class Serpiente extends Animal {
  constructor(nombre, edad, imagen, comentarios, sonido) {
    super(nombre, edad, imagen, comentarios, sonido);
  }

  Sisear(nuevoSonido) {
    this._sonido = nuevoSonido;
    return this._sonido();
  }
}