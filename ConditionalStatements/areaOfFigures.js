function calculateArea(shape, num1, num2) {
    let area = 0;
    if(shape === "square") {
        let side = Number(num1);
        area = side * side;
    }
    else if(shape == "rectangle") {
        let sideA = Number(num1);
        let sideB = Number(num2);
        area = sideA * sideB;
    }
    else if(shape === "circle") {
        let radius = Number(num1);
        area = Math.pow(num1, 2) * Math.PI;
    }
    else if(shape == "triangle") {
        let sideA = Number(num1);
        let sideB = Number(num2);
        area = (sideA * sideB) / 2;
    }
    console.log(area.toFixed(3));
}

calculateArea("circle",
"6");