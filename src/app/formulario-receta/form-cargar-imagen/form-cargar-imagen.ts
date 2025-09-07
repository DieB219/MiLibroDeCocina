import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { FilePreviewPipe } from "../../shared/pipes/file-preview-pipe";

@Component({
  selector: 'app-form-cargar-imagen',
  imports: [FilePreviewPipe],
  templateUrl: './form-cargar-imagen.html',
  styleUrl: './form-cargar-imagen.css'
})
export class FormCargarImagen {

  private fb = inject(NonNullableFormBuilder)
  protected formImage = this.fb.group({
    imagen: this.fb.control<File[]>([], Validators.required)
  })

  cargarImagen(imagen: FileList | null){
    if(imagen){
      const arr = Array.from(imagen)
      this.formImage.patchValue({imagen: arr})
      console.log(this.formImage.value)
    }
  }
}
