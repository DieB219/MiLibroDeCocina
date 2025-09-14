import { Component, inject, signal } from '@angular/core';
import { FormIngrediente } from "./form-ingrediente/form-ingrediente";
import { FormArray, FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormPasosReceta } from "./form-pasos-receta/form-pasos-receta";
import { Receta } from '../interfaces/receta-interface';
import { RecetaService } from '../services/receta-service';
import { Ingrediente } from '../interfaces/ingrediente-Interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario-receta',
  imports: [FormIngrediente, ReactiveFormsModule, FormPasosReceta],
  templateUrl: './formulario-receta.html',
  styleUrl: './formulario-receta.css'
})
export default class FormularioReceta {

  recetaService = inject(RecetaService)
  route = inject(Router)

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
    ingredientesReceta: this.fb.group({
      ingredientes: this.fb.array<Ingrediente>([], [Validators.required])
    }),
    pasosReceta: this.fb.group({
      pasos: this.fb.array<string>([], [Validators.required])
    })
  })

  async imagenValida(url:string){
    const resultado = await this.recetaService.validarImagenReceta(url)
    this.existeImagen.set(resultado)
  }

  private get formPasos(){
    return  this.formCrearReceta.get('pasosReceta.pasos') as FormArray
  }
  private get formIngredientes(){
    return  this.formCrearReceta.get('ingredientesReceta.ingredientes') as FormArray
  }

  protected guardar(){
    if(this.formCrearReceta.valid){
      this.recetaService.guardarReceta(this.formCrearReceta.getRawValue())
      this.existeImagen.set(false)

      this.formPasos.clear()    
      this.formIngredientes.clear()  
      this.formCrearReceta.reset()
      this.route.navigate(['/'])
    }
  }

}
