const canvas = document.querySelector('canvas');

const ctx = canvas.getContext("2d");

//Ancho y largo de la pantalla
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;


//creamos la bola

let bolas = []; 
for (let i=0; i<5; i++){
    bolas.push(new Bola(canvas.width/2, canvas.height/2)); 
}



function animar() {

    ctx.clearRect(0,0, canvas.width, canvas.height)

    bolas.forEach(bola =>{

        //recorremos de nuevo el array por cada bola hay que comprobar donde están las bolas y conectarlas
        bolas.forEach(bola2 => {
            ctx.beginPath(); 
            ctx.moveTo(bola.x, bola.y); 
            ctx.lineTo(bola2.x, bola2.y); 
            ctx.stroke(); 
            ctx.closePath(); 

        })
        bola.dibujar(); 
        bola.mover(); 
    })

    requestAnimationFrame(animar);
}
animar(); 