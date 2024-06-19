//Button id click event function calls
// document.addEventListener('DOMContentLoaded', function(){
//     const btn = document.getElementById('myBtn');
//     btn.onclick =function() {
//         alert("Welcome to javascript");
//     }
// })
document.addEventListener('DOMContentLoaded' , function(){
    const btn = document.getElementById('myBtn');
    btn.onclick = function() {
        let temp1 = document.getElementById('temperature1');
        let temp2 = document.getElementById('temperature2');
        let inputvalue = document.getElementById('temp-value').value;
        let result = document.getElementById('temp-result');
        let c,k,f,res;
        let tp=true;

        if(inputvalue==""){
            tp=false;
            document.getElementById('temp-result').innerHTML = "Enter value to convert ";
            document.getElementById('degree-sign').innerHTML = "";
            document.getElementById('temp-sign').innerHTML = "";
        }
        //1
        if(temp1.value=='Celsius' && temp2.value=='Kelvin'){
            if(tp){
                k = (inputvalue + 273.15);
                displayResult(k,temp2.value);
            }
        }
        //2
        else if(temp1.value=='Celsius' && temp2.value=='Fahrenheit'){
            if(tp){
                f = ((inputvalue * (9/5))+32);
                displayResult(f,temp2.value);
            }
        }
        //3
        else if(temp1.value=='Kelvin' && temp2.value=='Celsius'){
            if(tp){
                c= (inputvalue - 273.15);
                displayResult(c,temp2.value);
            }
        }
        //4
        else if(temp1.value=='Kelvin' && temp2.value=='Fahrenheit'){
            if(tp){
                f = ((inputvalue-273.15)*(9/5))+32 ;
                displayResult(f,temp2.value);
            }
        }//5
        else if(temp1.value=='Fahrenheit' && temp2.value=='Celsius'){
            if(tp){
                c = (inputvalue - 32) * (5/9) ;
                displayResult(c,temp2.value);
            }
        }//6
        else if(temp1.value=='Fahrenheit' && temp2.value=='Kelvin'){
            if(tp){
                k = ((inputvalue - 32) * (5/9)) + 273.15 ;
                displayResult(k,temp2.value);
            }
        }
        else if(temp1.value==temp2.value){
            let val = inputvalue;
            displayResult(val, temp1.value);
        }
    }
})

function displayResult(value, sin){
    let res = document.getElementById('temp-result').innerHTML = value.toFixed(3); ; //value 54646
    let deg = document.getElementById('degree-sign').innerHTML = "&deg";
    let sign = document.getElementById('temp-sign');
    if(sin=='Celsius'){
        sign.innerHTML = "C";
    }
    else if(sin=='Fahrenheit'){
        sign.innerHTML = "F";
    }
    else{
        sign.innerHTML = "K";
    }
}



