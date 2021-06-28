Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            img:[ //array di img
                {path:"./img/habana.jpg",name:"Habana"},
                {path:"./img/cayoJutias.jpg",name:"Cayo Jutias"},
                {path:"./img/trinidad.jpg",name:"Trinidad"},
                {path:"./img/varadero.jpg",name:"Varadero"},
                {path:"./img/santiagoDeCuba.jpg",name:"Santiago De Cuba"},
                {path:"./img/cayoLevisa.jpg",name:"Cayo Levisa"},
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
  

