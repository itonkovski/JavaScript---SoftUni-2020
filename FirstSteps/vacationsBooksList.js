function vacationBooksList(pagesCount, pagesPerHour, days) {
    pagesCount = Number(pagesCount);
    pagesPerHour = Number(pagesPerHour);
    days = Number(days);

    let totalTimeForBook = pagesCount / pagesPerHour;
    let hoursPerDay = totalTimeForBook / days;
    console.log(hoursPerDay);
    
}

vacationBooksList("212",
"20",
"2")