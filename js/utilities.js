function getInputValueById(elementId) {
    const inputElement = document.getElementById(elementId);
    const inputElementValueString = inputElement.value;
    const inputElementValue = parseFloat(inputElementValueString);
    if (isNaN(inputElementValue)) {
        return NaN;
    }
    return inputElementValue;
}