/**@param size элемент в котором рисуем игровое поле */
function renderField(className){
    function createDiv(num){       
        const div = document.createElement('span');    
        div.className = `fieldChild numField${num}`          
        return div
      }
      
      let parent = document.querySelector(`${className}`);
      for (var i = 0; i < 100; i++) {
        parent.appendChild(createDiv(i));
      }
}

renderField('.playingField.computerField')
renderField('.playingField.myField')

const arrayFieldUp = ['A','Б','В','Г','Е','Д','Ж','З','И','К'] 
const arrayFieldLeft = [1,2,3,4,5,6,7,8,9,10] 

// для поля компьютера (нумерация строк и столбцов)
document.querySelector('.playingFieldUp.computer').innerHTML = renderText(arrayFieldUp, 'playingFieldUpChild')
document.querySelector('.playingFieldLeft.computer').innerHTML = renderText(arrayFieldLeft, 'playingFieldLeftChild')

// для поля игрока (нумерация строк и столбцов)
document.querySelector('.playingFieldUp.myField').innerHTML = renderText(arrayFieldUp, 'playingFieldUpChild')
document.querySelector('.playingFieldLeft.myField').innerHTML = renderText(arrayFieldLeft, 'playingFieldLeftChild')

function renderText(array, className){    
    return array.map((elem) => {
      return `<span class="${className}">${elem}</span>`}).join('')
}

