/**@param size элемент в котором рисуем игровое поле */
function renderField(className){
    function createDiv(num){       
        const div = document.createElement('span');    
        div.className = `field child${num}`  
        // div.style.width  = '20px'
        // div.style.height = '20px'       
        // div.style.float = 'left'
        // div.style.outline = '1px solid #000000'        
        return div
      }
      
      let parent = document.getElementById(`${className}`);
      for (var i = 0; i < 100; i++) {
        parent.appendChild(createDiv(i));
      }
}

renderField('playingField')


