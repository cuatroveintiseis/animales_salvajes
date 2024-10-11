export class Animal {
  constructor(nombre, edad, imagen, comentarios, sonido) {
    this._nombre = nombre;
    this._edad = edad;
    this._img = imagen;
    this._comentarios = comentarios;
    this._sonido = sonido;
  }

  get Nombre() {
    return this._nombre;
  }


  get Edad() {
    return this._edad;
  }

  get Img() {
    return this._imagen;
  }

  get Comentarios() {
    return this._comentarios;
  }

  set Comentarios(nuevoComentario) {
    return this._comentario = nuevoComentario;
  }


  get Sonido() {
    return this._sonido;
  }


}