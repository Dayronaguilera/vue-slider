Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            img:[ //array di img
                "./img/habana.jpg",
                "./img/cayoJutias.jpg",
                "./img/trinidad.jpg",
                "./img/varadero.jpg",
                "./img/santiagoDeCuba.jpg",
                "./img/cayoLevisa.jpg",
            ],
            // l'indice di ogni immagine
            indexImg:0,       
        },
        created() { //tutto cio che viene eseguito qui, viene lanciato dopo la creazione della pagina 
            setInterval(() => {
                this.next();
            }, 4000);
        },
        methods: {
            next:function () { //al click su next l'img cresce di 1
                if (this.indexImg === (this.img.length - 1)) {
                    this.indexImg = 0;
                }else{
                    this.indexImg++;
                }
            },
            prev:function(){ //al click su prev l'img decresce di 1
                if (this.indexImg === 0) {
                    this.indexImg = this.img.length - 1;
                }else{
                    this.indexImg--;   
                }
            },
            selectPicDot: function (index) { //per associare il pallino con l'index al click
                this.indexImg = index;
            },
            CurrentDot: function (index) { // per associare il pallino con l'index al colore 
                if (index === this.indexImg) {
                    return "current";
                }else{
                    return "";
                }
            }
        }
    }
 );
  

