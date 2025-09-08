import { Component, signal } from '@angular/core';
import { FormIngrediente } from "./form-ingrediente/form-ingrediente";
import { ReactiveFormsModule } from '@angular/forms';
import { FormPasosReceta } from "./form-pasos-receta/form-pasos-receta";

@Component({
  selector: 'app-formulario-receta',
  imports: [FormIngrediente, ReactiveFormsModule, FormPasosReceta],
  templateUrl: './formulario-receta.html',
  styleUrl: './formulario-receta.css'
})
export default class FormularioReceta {

  protected title = signal('Crear Nueva Receta')

  protected existeImagen = signal(false)

  validarImagen(url: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

  async imagenValida(url:string){
    const resultado = await this.validarImagen(url)
    this.existeImagen.set(resultado)
  }

}
