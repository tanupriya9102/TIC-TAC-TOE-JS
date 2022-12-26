console.log("hello")
//restart game button
var restart1 = document.querySelector('#b')

//grab all squares 

var squares=document.querySelectorAll('td')

//clear all squares
function clearBoard(){
    for(var i=0;i<squares.length;i++){
        squares[i].textContent='';
    }
}
restart1.addEventListener('click',clearBoard);
//check marker
function changeMarker(){
    if(this.textContent===''){
        this.textContent='X';
    }
    else if(this.textContent==='X'){
        this.textContent='O';
    }
    else{
        this.textContent=''
    }

}
for(var i=0;i<squares.length;i++){
    squares[i].addEventListener('click',changeMarker);
}


//for loop to add event listeners to all squares

// function Winner(){
//     if((square[i]===square[i+1] and square[i]===square[i+2]) or )
// }