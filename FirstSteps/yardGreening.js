function yardGreeningCalculations(area) {
    let areaCalc = area * 7.61;
    let discount = 0.18 * areaCalc;
    let finalPrice = areaCalc - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`)
}

yardGreeningCalculations("550");