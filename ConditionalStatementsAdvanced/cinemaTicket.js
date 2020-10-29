function ticketPrice(dayOfTheWeek) {
    let price = 0;
    if(dayOfTheWeek == "Monday"
    || dayOfTheWeek == "Tuesday"
    || dayOfTheWeek == "Friday") {
        price = 12;
        console.log(price);
    }
    else if(dayOfTheWeek == "Wednesday"
    || dayOfTheWeek == "Thursday") {
        price = 14;
        console.log(price);
    }
    else if(dayOfTheWeek == "Saturday"
    || dayOfTheWeek == "Sunday") {
        price = 16;
        console.log(price)
    }
    /* switch (dayOfTheWeek) {
        case "Monday":
        case "Tuesday":
        case "Friday":
            price = 12;
            console.log(price);
            break;
        case "Wednesday":
        case "Thursday":
            price = 14;
            console.log(price);
        case "Saturday":
        case "Sunday":
            price = 16;
            console.log(price);
        default:
            console.log("Error");
            break;
    } */
}
ticketPrice("Monday");