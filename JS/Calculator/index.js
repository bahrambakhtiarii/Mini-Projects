
const display = document.getElementById("diplay");



function addDisply(input){

    display.value += input;

}

function clearDisply(){

    display.value = "";
}

function calculat(){

    try{
        display.value = eval(display.value);
    }catch(error) {
        display.value = "Error!";
    }

}