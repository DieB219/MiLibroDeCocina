import { Component, inject, signal } from '@angular/core';
import { Ingrediente } from '../interfaces/ingrediente-Interface';
import { FormIngrediente } from "./form-ingrediente/form-ingrediente";
import { NonNullableFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-receta',
  imports: [FormIngrediente, ReactiveFormsModule],
  templateUrl: './formulario-receta.html',
  styleUrl: './formulario-receta.css'
})
export default class FormularioReceta {

  private fb = inject(NonNullableFormBuilder)
  protected formPasos = this.fb.group({
    paso: ['', [Validators.required]]
  })

  protected title = signal('Crear Nueva Receta')
  protected mostrarInput = signal(false)

  protected pasos = signal<string[]>([])

  agregarPaso(){
    if(!this.mostrarInput()){
      this.mostrarInput.set(true)
    } else{
      this.mostrarInput.set(false)
    }
  }

  guardarPaso(){
    if(this.formPasos.valid){
      const pasoInput = this.formPasos.getRawValue()
      this.pasos.update(pasos => [...pasos, pasoInput.paso])

      this.formPasos.reset()
    }
  }

  eliminarPaso(indicePaso:number){
    this.pasos.update(pasos => pasos.filter((_,i)=>{
      return i !== indicePaso
    }))
  }

}
