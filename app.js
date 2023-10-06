/**@param size элемент в котором рисуем игровое поле */
function renderField(className){
    function createDiv(num){       
        const div = document.createElement('span');    
        div.className = `field child${num}`          
        return div
      }
      
      let parent = document.getElementById(`${className}`);
      for (var i = 0; i < 100; i++) {
        parent.appendChild(createDiv(i));
      }
}

renderField('playingField')


const arrayFieldUp = ['A','Б','В','Г','Е','Д','Ж','З','И','К'] 
const arrayFieldLeft = [1,2,3,4,5,6,7,8,9,10] 

document.getElementById('playingFieldUp').innerHTML = renderText(arrayFieldUp, 'playingFieldUp')
document.getElementById('playingFieldLeft').innerHTML = renderText(arrayFieldLeft, 'playingFieldLeft')

function renderText(array, className){    
    return array.map((elem, index) => {
      return `<span class="${className} child${index}">${elem}</span>`}).join('')
}

