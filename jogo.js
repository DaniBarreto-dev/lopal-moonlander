
 /**   @type {HTMLCanvasElement} */

let canvas = document.querySelector("#jogo");
let contexto = canvas.getContext("2d");

/*contexto.rect(0 , 0, 100, 100);
contexto.fillStyle = "white";
contexto.fill();
contexto.strokeStyle = "black"
contexto.stroke()

contexto.beginPath()
contexto.moveTo(100, 100);
contexto.lineTo(200, 100);
contexto.lineTo(100, 200);
contexto.lineTo(100, 100);
contexto.fillStyle = "black"
contexto.fill();
*/

let moduloLunar = {
    posicao:  {
        x: 100,
        y: 100
    }  
}

function desenharModuloLunar(){
    contexto.save();
    contexto.beginPath();
    contexto.translate(100, 100);
    contexto.rotate(0);
    contexto.rect(10, 10, 20 , 20);
    contexto.fillStyle = "black";
    contexto.fill();
    contexto.closePath()
    contexto.restore()

}











let x = 100;
function desenhar(){
 //limpar tela
 contexto.clearRect(0, 0, canvas.width, canvas.height);

 contexto.save()
 contexto.translate(canvas.width / 2, canvas.height / 2 );
 contexto.beginPath();

// contexto.arc(x, 100, 25, 0, 2 * Math.PI);
contexto.rotate(Math.PI/4);
contexto.rect(x, 100, 25, 10);
 contexto.fillStyle = "black";
 contexto.fill();
 contexto.restore();

 x = x + 1
 requestAnimationFrame(desenhar)
 desenharModuloLunar()
}

desenhar()

