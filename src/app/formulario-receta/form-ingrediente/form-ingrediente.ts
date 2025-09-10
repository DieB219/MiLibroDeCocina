import { Component, computed, inject, input, signal } from '@angular/core';
import { Ingrediente } from '../../interfaces/ingrediente-Interface';
import { FormArray, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-ingrediente',
  imports: [ReactiveFormsModule],
  templateUrl: './form-ingrediente.html',
  styleUrl: './form-ingrediente.css'
})
export class FormIngrediente {
  formGroup = input.required<FormGroup>()
  
  private fb = inject(NonNullableFormBuilder)
  formIngredientes = this.fb.group({
    nombre: ['', [Validators.required]],
    cantidad: [1, [Validators.required]],
    medida: ['']
  })
  
  ingredientes = computed(()=> this.formGroup().get('ingredientes') as FormArray<FormControl<Ingrediente>>)

  agregarIngrediente(){
    if(this.formIngredientes.valid){
      const ingrediente: Ingrediente = this.formIngredientes.getRawValue()
      this.ingredientes().push(this.fb.control(ingrediente))

      this.formIngredientes.reset()
    }
  }

  eliminarIngrediente(posicion: number){
    console.log(this.ingredientes().value);
    this.ingredientes().removeAt(posicion)
  }

}
