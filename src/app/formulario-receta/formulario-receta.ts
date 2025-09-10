import { Component, inject, signal } from '@angular/core';
import { FormIngrediente } from "./form-ingrediente/form-ingrediente";
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormPasosReceta } from "./form-pasos-receta/form-pasos-receta";
import { Receta } from '../interfaces/receta-interface';


@Component({
  selector: 'app-formulario-receta',
  imports: [FormIngrediente, ReactiveFormsModule, FormPasosReceta],
  templateUrl: './formulario-receta.html',
  styleUrl: './formulario-receta.css'
})
export default class FormularioReceta {

  protected title = signal('Crear Nueva Receta')
  protected existeImagen = signal(false)

  private fb = inject(NonNullableFormBuilder)
  protected formCrearReceta = this.fb.group({
    nombre: ['', [Validators.required]],
    urlImagen: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    dificultad: ['', [Validators.required]],
    categoria: ['', [Validators.required]],
    tiempo: [1, [Validators.required]],
    ingredientes: [[], [Validators.required]],
    pasosReceta: this.fb.group({
      pasos: this.fb.array([])
    })
  })

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

  mostrar(){
    console.log(this.formCrearReceta.getRawValue());
  }

}
