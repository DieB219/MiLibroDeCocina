export interface Receta{
  nombre: string,
  urlImagen: string,
  descripcion: string,
  dificultad: number,
  categoria: string,
  tiempo: string,
  ingredientes: string[],
  pasos: string[]
}