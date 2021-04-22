var botao = document.querySelector('.botao')
var p = document.querySelector('p')

botao.addEventListener ('click', (evento)=>{

    var r = Math.round( Math.random() * 255 );
    var g = Math.round( Math.random() * 255 );
    var b = Math.round( Math.random() * 255 );

    p.style.backgroundColor = `rgb( ${r}, ${g}, ${b} )`
})