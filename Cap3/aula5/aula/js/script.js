window.addEventListener('load', start);

var globalNames=['Um', 'Dois', 'Três', 'Quatro'];
var inputName = null;

function start(){
    inputName = document.querySelector('#inputName');
    preventFormSubmit();
    activateInput();

}

function preventFormSubmit(){
    function handleFormSubimit(event){
        event.preventDefault()
    }
    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubimit);

}
function activateInput(){
    inputName.focus();
}