import { Component } from '@angular/core';
import { SelectFiltros } from "./select-filtros/select-filtros";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [SelectFiltros, RouterLink],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css'
})
export class Toolbar {}
