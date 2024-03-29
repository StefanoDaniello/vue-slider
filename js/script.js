/*
Descrizione:
Partendo dal markup e dall'array presenti nella cartella allegata, creare uno slider di immagini con Vue.
Milestone 1:
Modifichiamo il template html per renderizzare dinamicamente la lista delle thumbnails e l'immagine grande (partiamo rendendo attiva la prima immagine dell'array.  Quindi l'indice attivo sarà inizialmente 0;
Milestone2:
Al click dell'utente sulle frecce incrementare/ decrementare l'indice attivo facendo in modo che l'immagine visualizzata in grande cambi e la classe active si sposti sulla thumbnail corretta
Milestone 3:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.
Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/

import { slides } from './data.js';

const{createApp} = Vue;

createApp({
    data(){
        return{
            slides,
            active:0,
            intervalID: false,
            darkMode: false,
            buttonText: 'Light Mode',
            rows:10,
            cols:10,
            // matrice per memorizzare i numeri dei quadrati
            grid:[],
            showGrid:false,
            prova:false,
            newTask: '',
            tasks: []
        }
    },
    methods:{
        next(){
            if(this.active < this.slides.length - 1){
                this.active++
            }else{
                this.active = 0
            }
           
        },
        prev(){
            if(this.active > 0){
                this.active--
            }else{
                this.active = this.slides.length - 1
            }
        },
        goToSlides(index){
            this.active = index
        },
        startTimer(){
            this.intervalID=setInterval(this.next,3000)
        },
        stopTimer(){
            clearInterval(this.intervalID)
        },
        toggleMode() {
            this.darkMode = !this.darkMode;
            this.buttonText = this.darkMode ? 'Dark Mode' : 'Light Mode';
        },
        // Funzione per inizializzare la griglia con i numeri
        generateGrid(){
            let count=1
            for(let i=0;i<this.rows;i++){
                const row=[];
                for(let j=0;j<this.cols;j++){
                    row.push(count++)
                }
                this.grid.push(row);
            }
        },
        toggleGrid() {
            this.showGrid = !this.showGrid;// Inverti lo stato del toggle
            if (this.showGrid && this.grid.length === 0) {
                this.generateGrid(); // Genera la griglia solo se non è già mostrata e non è stata generata
            }
        },
        addTask(){

            if (this.newTask.trim() !== '') {
            this.tasks.push({ name: this.newTask, completed: false });
            this.newTask = '';
    }
        },
        completeTask(index){
            this.tasks[index].completed = true;
        },    
        removeTask(index){
            this.tasks.splice(index, 1);
        }
        
      
    },
    mounted(){
        this.startTimer()
        this.generateGrid()
    }
}).mount('#app');