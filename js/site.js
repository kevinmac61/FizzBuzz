// get the values from the page and parse the values

function getValues() {
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        resultsFizz(fbArray)
    }else {
        alert(`Must be numbers!`)
    }
}

// one option to determine if fizz, buzz or fizzbuzz

function fizzBuzzToo(fizzValue, buzzValue) {
    let returnArray = [];
    // loop from 1 to 100
    for (let i = 1; i <= 100; i++) {

        if(i % fizzValue == 0 && i % buzzValue == 0) {
            returnArray.push(`FizzBuzz`);
        }else if (i % buzzValue == 0) {
            returnArray.push(`Buzz`);
        }else if(i % fizzValue == 0){
            returnArray.push(`Fizz`);   
        }else{
            returnArray.push(i);
        }     
    }
    return returnArray;
}

// my preferred option to determine if fizz, buzz or fizzbuzz
function fizzBuzz(fizzValue, buzzValue) {
    let returnArray = [];
    // loop from 1 to 100
    for (let i = 1; i <= 100; i++) {

        let value = ((i % fizzValue == 0 ? `Fizz` : '') + (i % buzzValue == 0 ? 'Buzz' : '') || i ); 
        returnArray.push(value); 
    }
    return returnArray;
}

// display the results

function resultsFizz(fbArray){
    // get the table body element from the page
    let tableBody = document.getElementById("results");
    // get the template from app page
    let templateRow = document.getElementById("fbTemplate");
    // reset the table
    tableBody.innerHTML = "";
    
    // loop through the array
    for (let index = 0; index < fbArray.length; index += 5) {
        
        let tableRow = document.importNode(templateRow.content, true);
        // put number of td into an array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];

        rowCols[1].classList.add(fbArray[index+1]);
        rowCols[1].textContent = fbArray[index+1];

        rowCols[2].classList.add(fbArray[index+2]);
        rowCols[2].textContent = fbArray[index+2];

        rowCols[3].classList.add(fbArray[index+3]);
        rowCols[3].textContent = fbArray[index+3];

        rowCols[4].classList.add(fbArray[index+4]);
        rowCols[4].textContent = fbArray[index+4];

        tableBody.appendChild(tableRow);
    }
}
