import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url: string = ""

  constructor(private storage: Storage) { }//, public imageService: ImageService

  public uploadImage($event: any, name: string) {//sube imagen al storage
    const file = $event.target.files[0] // El archivo seleccionado
    console.log(file)
    const imgRef = ref(this.storage, `image/` + name) //'image/' es la ruta dentro del storage
    uploadBytes(imgRef, file)
      .then(response => {this.getImages()})
      .catch(error => console.log(error)) 
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        //this.imageService.url = e.target.result; // Guardar la URL de la imagen para mostrarla
      };
      reader.readAsDataURL(file);
    }
  }

  getImages(){ //Obtiene imagen del storage
    const imageRef = ref(this.storage, 'image')
    list (imageRef)
      .then(async response => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
          console.log("La url es: " + this.url)
        }
      })
      .catch(error => console.log(error)) 
  }
}
