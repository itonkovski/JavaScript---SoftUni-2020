function workingHours(hour, dayOfTheWeek) {
    hour = Number(hour);
    if (dayOfTheWeek == "Monday"
        || dayOfTheWeek == "Tuesday"
        || dayOfTheWeek == "Wednesday"
        || dayOfTheWeek == "Thursday"
        || dayOfTheWeek == "Friday"
        || dayOfTheWeek == "Saturday" ) {
        if (hour >= 10 && hour <= 18) {
            console.log("open");
        }
        else {
            console.log("closed");
        }
    }
    else {
        console.log("closed");
    }
}
workingHours("11",
    "Sunday");