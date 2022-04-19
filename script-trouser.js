function calculateFabric() {
    const hipValue = parseInt(document.getElementById("hip").value);
    const trouserLengthValue = parseInt(document.getElementById("trouserLength").value);
    let outputValue;

    if (hipValue <= 40) {
        outputValue = (trouserLengthValue + 8) / 39
    } else if(hipValue > 40 && hipValue <= 70 ){
        outputValue = (trouserLengthValue + 10) / 39
    } else {
        document.getElementById("output").setAttribute('value', 'Invalid input. Please provide a correct measurement.');
    }

    document.getElementById("output").setAttribute('value', `${outputValue.toFixed(2)} meters`);
}
