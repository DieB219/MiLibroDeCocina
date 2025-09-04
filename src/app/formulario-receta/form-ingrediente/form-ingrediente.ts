import { Component, inject, signal } from '@angular/core';
import { Ingrediente } from '../../interfaces/ingrediente-Interface';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-ingrediente',
  imports: [ReactiveFormsModule],
  templateUrl: './form-ingrediente.html',
  styleUrl: './form-ingrediente.css'
})
export class FormIngrediente {

  private fb = inject(NonNullableFormBuilder)
  formIngredientes = this.fb.group({
    nombre: ['', [Validators.required]],
    cantidad: [1, [Validators.required]],
    medida: ['']
  })

  protected mapIngrediente = new Map<string, Ingrediente>()
  protected ingredientes = signal<Ingrediente[]>([])

  agregarIngrediente() {
    if(this.formIngredientes.valid) {
      const ingrediente: Ingrediente = this.formIngredientes.getRawValue() // valores del formulario
      // const id = this.mapIngrediente.size // id autoincremental

      this.mapIngrediente.set(ingrediente.nombre, ingrediente)
      this.ingredientes.set(Array.from(this.mapIngrediente.values()))
      this.formIngredientes.reset();
    }
    else{this.formIngredientes.markAllAsTouched()}
  }

  eliminarIngrediente(clave: string) {
    this.mapIngrediente.delete(clave)
    this.ingredientes.set(Array.from(this.mapIngrediente.values()))
  }
}
