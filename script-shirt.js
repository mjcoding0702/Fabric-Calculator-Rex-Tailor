function calculateFabric() {
    const chestValue = parseInt(document.getElementById("chest").value);
    const bodyLengthValue = parseInt(document.getElementById("bodyLength").value);
    const sleeveLengthValue = parseInt(document.getElementById("sleeveLength").value);
    let outputValue;

    if (chestValue <= 40) {
        outputValue = (bodyLengthValue * 2) / 39
    } else if(chestValue > 40 && chestValue <= 80 ){
        outputValue = ((bodyLengthValue * 2) + 8) / 39
    } else {
        document.getElementById("output").setAttribute('value', 'Invalid input. Please provide a correct measurement.');
    }

    document.getElementById("output").setAttribute('value', `${outputValue.toFixed(2)} meters`);
}
