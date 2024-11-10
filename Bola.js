class Bola{

    constructor(x,y){
        this.x = x; 
        this.y=y; 
        this.radio=10; 
        this.dirX= (Math.random()*2)-1;
        this.dirY= (Math.random()*2)-1;
        this.velocidad=3; 
    }

    dibujar(){
        ctx.beginPath(); //Empieza el punto
        ctx.arc(this.x, this.y, this.radio, 0, Math.PI*2); //dimensiones del arco
        ctx.fill(); //relleno
        ctx.closePath(); //cierre del circulo
    }

    mover(){
        this.x += this.dirX*this.velocidad; 
        this.y += this.dirY*this.velocidad; 
        if (this.x + this.radio > canvas.width || this.x<0) this.dirX *= -1;
        if (this.y + this.radio > canvas.width || this.y<0 || this.y + this.radio > canvas.height) this.dirY *= -1
        
    }





}