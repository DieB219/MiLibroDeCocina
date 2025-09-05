import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-pasos-receta',
  imports: [ReactiveFormsModule],
  templateUrl: './form-pasos-receta.html',
  styleUrl: './form-pasos-receta.css'
})
export class FormPasosReceta {
  private fb = inject(NonNullableFormBuilder)
  protected formPasos = this.fb.group({
    paso: ['', [Validators.required]]
  })

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
