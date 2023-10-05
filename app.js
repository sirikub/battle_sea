/**
 * x, y размер квадрата в игровом поле
 * @param size размер клетки
 * @param y - Number of times
 */
function renderFindPlayer(size){
    //const canvas = document.getElementById("playingField");

    // canvas.style.width = "200px";
    // canvas.style.height = "200px";
    // let x = 0 // размер клетки
    // ctx.lineWidth = 1;
    // // for (let i=0; i<=20; i++) {     
    // //         x = x + 20
    // //         ctx.moveTo(x, 0)
    // //         ctx.lineTo(x, 190);   
    // // }

    // // for (let a = 0; a <= 200; a += 20.5) {
    // //     ctx.moveTo(a, 0);
    // //     ctx.lineTo(a, 190);
    // //   }
    // //   for (let b = 0.5; b < 290; b += 31.55) {
    // //     ctx.moveTo(0, b);
    // //     ctx.lineTo(290, b);
    // //   }
    //   //ctx.strokeStyle = "#888";
    //   ctx.stroke();
    // }


    var canvas = document.getElementById('playingField')
    var ctx = canvas.getContext('2d') 
    ctx.rect(0, 0, 200, 200)
    
    var size = 160
    canvas.style.width = size + "px"
    canvas.style.height = size + "px"
    
    // Set actual size in memory (scaled to account for extra pixel density).
    var scale = window.devicePixelRatio; // Change to 1 on retina screens to see blurry canvas.
    canvas.width = size * scale;
    canvas.height = size * scale;
    
    let x = 0 // размер клетки

    let y = 0 
    let width = 0
    
    for (let i=0;i<100;i++){         
        ctx.rect(x, y, 20, 20)
        
        ctx.stroke();
        x = x + 20
        width = width + 20        
        if (canvas.width == width){             
            x = 0
            width = 0
            y = y + 20
        }  
        console.log(width, x, y, canvas.width)    
 
}
}

renderFindPlayer(20)


