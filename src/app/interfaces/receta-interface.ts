import { Ingrediente } from "./ingrediente-Interface";

export interface Receta{
  nombre: string,
  urlImagen: string,
  descripcion: string,
  dificultad: string,
  categoria: string,
  tiempo: number,
  ingredientesReceta: {
    ingredientes: Ingrediente[];
  };
  pasosReceta: {
    pasos: string[];
  };
}