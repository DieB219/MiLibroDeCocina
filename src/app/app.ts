import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private fb = inject(FormBuilder)
  protected readonly title = signal('Libro-Cocina-web');

  protected estaAbierto = signal(false);
  protected formBuscar = this.fb.group({
    buscar: ''
  })

}
