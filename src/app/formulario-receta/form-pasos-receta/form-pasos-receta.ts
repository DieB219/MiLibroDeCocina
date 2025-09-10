import { Component, computed, inject, input, signal } from '@angular/core';
import { FormArray, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-pasos-receta',
  imports: [ReactiveFormsModule],
  templateUrl: './form-pasos-receta.html',
  styleUrl: './form-pasos-receta.css'
})
export class FormPasosReceta {
  formGroup = input.required<FormGroup>()
  private fb = inject(NonNullableFormBuilder)

  protected pasos = computed(()=> this.formGroup().get('pasos') as FormArray<FormControl<string>>)

  agregarInputPaso(){
    this.pasos().push(this.fb.control(''))
  }

  eliminarPaso(posicion: number){
    this.pasos().removeAt(posicion)
  }

}
