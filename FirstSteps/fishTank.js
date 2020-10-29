function fishTank(length, width, height, percentage) {
    length = Number(length);
    width = Number(width);
    height = Number(height);
    percentage = Number(percentage);

    let area = length * width * height;
    let liters = area * 0.001;
    let totalPercentage = percentage * 0.01;
    let totalLiters = liters * (1 - totalPercentage);
    console.log(totalLiters)
}

fishTank("85",
"75",
"47",
"17");