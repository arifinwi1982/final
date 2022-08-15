    let input_a = document.getElementById("input_a").value ;
    let input_b = document.getElementById("input_b").value ;
function addValue(){
    // get the operands value

    // parse to integer. You can use: parseInt(input, 10);

    // perform operation

    // creating the text output

    // (if you want to check) print out in console

    // change the text area
    let input_a = document.getElementById("input_a").value ;
    let input_b = document.getElementById("input_b").value ;
     if( Number.isInteger(parseInt(input_a)) && Number.isInteger(parseInt(input_b)) )
     {
    document.mycalculator.output.value = input_a + " + " + input_b + " = " + (parseInt(input_a) + parseInt(input_b)) ;
    }
     else
     {
        alert("Both inputs cannot be empty and have to be numeric numbers");
     }
}


function mulValue(){
    let input_a = document.getElementById("input_a").value ;
    let input_b = document.getElementById("input_b").value ;
    if( Number.isInteger(parseInt(input_a)) && Number.isInteger(parseInt(input_b)) )
    {
    document.mycalculator.output.value = document.getElementById("input_a").value + " x " + document.getElementById("input_b").value + " = " + (document.getElementById("input_a").value * document.getElementById("input_b").value) ;
}
else
{
   alert("Both inputs cannot be empty and have to be numeric numbers");
}

}

function divValue(){
    let input_a = document.getElementById("input_a").value ;
    let input_b = document.getElementById("input_b").value ;
    if( Number.isInteger(parseInt(input_a)) && Number.isInteger(parseInt(input_b)) )
    {
    document.mycalculator.output.value = document.getElementById("input_a").value + " / " + document.getElementById("input_b").value + " = " + (document.getElementById("input_a").value / document.getElementById("input_b").value);
    }
    else
    {
       alert("Both inputs cannot be empty and have to be numeric numbers");
    }

}
