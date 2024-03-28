/*Descrizione:
Partendo dal markup e dall'array presenti nella cartella allegata, creare uno slider di immagini con Vue.
Milestone 1:
Modifichiamo il template html per renderizzare dinamicamente la lista delle thumbnails e l'immagine grande 
(partiamo rendendo attiva la prima immagine dell'array. 
 Quindi l'indice attivo sarà inizialmente 0;
Milestone2:
Al click dell'utente sulle frecce incrementare/ decrementare l'indice attivo facendo in modo
 che l'immagine visualizzata in grande cambi e la classe active si sposti sulla thumbnail corretta
Milestone 3:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, 
la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/

import { slides } from "./data.js";


const {createApp} = Vue;

createApp({
    data() {
        return {
            slides,
            active: 0,
            intervalID: false
        }
    },
    methods: {

        next(){
            if(this.active < this.slides.length -1){
                this.active++
            }else{
                this.active=0;
            }
        },
        prev(){
            if(this.active > 0){
                this.active--
            }else{
                this.active = this.slides.length -1;
            }
        },
       goToSlide(index){
        this.active = index;
       },
       startInterval(){
        this.intervalID =setInterval(this.next,1000)
       },

       clearInterval(){
        clearInterval(this.intervalID)
       }
  
    },
    mounted(){
        // manipolazione dei dati o del DOM dopo l'inserimento di dati o elementi

    }

}).mount('#app')