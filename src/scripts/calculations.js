function epoint_septal_separation() {
    // Calculate the septal separation based on the EPSS value
    // The formula is based on the assumption that the EPSS value is in mm
    const value = parseFloat(document.getElementById('epssInput').value);
    let LVEF = 75.5 - (2.5 * value);
    document.getElementById('result').textContent = LVEF;
}