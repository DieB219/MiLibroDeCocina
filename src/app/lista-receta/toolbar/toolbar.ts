import { Component, signal } from '@angular/core';
import { SelectFiltros } from "./select-filtros/select-filtros";

@Component({
  selector: 'app-toolbar',
  imports: [SelectFiltros],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css'
})
export class Toolbar {}
